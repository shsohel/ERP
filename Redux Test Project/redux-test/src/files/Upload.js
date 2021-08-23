import Uppy from '@uppy/core'
import { DragDrop } from '@uppy/react'
import Tus from '@uppy/tus'
import axios from 'axios'
import React from 'react'

const uppy = new Uppy( {
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true,
} )

uppy.use( Tus, { endpoint: 'http://localhost:5500/photo' } )

uppy.on( 'complete', ( result ) => {
    console.log( result )
    const url = result.successful[0]
    console.log( url )
    axios.
    // store.dispatch( {
    //     type: 'SET_USER_AVATAR_URL',
    //     payload: { url },
    // } )
} )

const AvatarPicker = ( { currentAvatar } ) => {
    return (
        <div>
            <img src={currentAvatar} alt="Current Avatar" />
            <DragDrop
                uppy={uppy}
                locale={{
                    strings: {
                        // Text to show on the droppable area.
                        // `%{browse}` is replaced with a link that opens the system file selection dialog.
                        dropHereOr: 'Drop here or %{browse}',
                        // Used as the label for the link that opens the system file selection dialog.
                        browse: 'browse',
                    },
                }}
            />
        </div>
    )
}


const Upload = () => {
    return (
        <div>
            <AvatarPicker />
        </div>
    )
}

export default Upload

