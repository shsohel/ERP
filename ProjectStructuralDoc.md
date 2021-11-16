## প্রথমে শুধুমাত্র ফোল্ডার ম্যাপ দেওয়া হলো । নিচে প্রত্যেক ফোল্ডারের ডিটেইলস দেওয়া হয়েছে।

- public/
  - favicon.ico ----------------------------------> Favicon
  - index.html -----------------------------------> Main HTML
  - logo.png
- src/
  - documents ---------------------------------------> There have documention files.
  - @core ---------------------------------------> Vuexy Admin core files
  - @fake-db ------------------------------------> Fake Database for mocking axios requests (Fake API Calls)
  - assets --------------------------------------> Assets
    - img
    - scss --------------------------------------> Here you can define customs scss your indivisual logic
  - auth ----------------------------------------> Your Authentication Files/Configuration
  - configs -------------------------------------> Template config files
  - documents -------------------------------------> All Project Related Docs are here.
  - layouts -------------------------------------> Your Layouts
  - navigation ----------------------------------> Vertical & Horizontal Navigation menu files
    - horizontal
    - vertical
  - redux ---------------------------------------> Global Redux Store
    - actions -----------------------------------> actions
    - reducers ----------------------------------> reducers
    - storeConfig -------------------------------> Creates & Exports Store config
  - router --------------------------------------> App Router Files
    - route -------------------------------------> Components Routes
    - index.js ----------------------------------> Router index file
  - utility -------------------------------------> Utilities & Context
  - views ---------------------------------------> View files for all pages
    - moduleName ----------------------------------> Single Module
      - subModuleNam ------------------------------> Sub-Module
        - Form ------------------------------> Form Components
        - List ------------------------------> List Components
        - Store ------------------------------> State Components
  - App.js --------------------------------------> Main App File
  - index.js ------------------------------------> App Index File
  - package.json

# Details for All Folders of src root

## src/@core Folder

1.  এই ফোল্টারটি কোনো কিছু চেঞ্জ করা যাবে না। শুধুমাত্র এর চাইল্ড ফোল্ডার _scss_ ফোল্ডারটির ভেতরের দুটি ফোল্ডারে ফাইল এড করা যাবে
    এবং মডিফাই করা যাবে যদি আপনি কোনো CSS জনিত কিছু প্রয়োগ করতে চান। যার ফাইল CSS গুলো আপনি src/assets/scss/style.scss ফাইলে ওভার-রাইট করতে পারবেন।
2.  যদি নতুন করে scss ফাইল এড করতে চান তাহলে দুটি ডিরেক্টরি আপনি অবশ্যই ফলো করবেন । যেমন:

    1. @core/scss/base/pages/merchandising-buyer.scss (প্রথমে এটির মতো ক্রিয়েক করতে হবে )
    2. @core/scss/reat/merchandising/merchandising-buyer.scss (তারপর প্রথম ফাইলটি এখানে ইনফ্রোট করা করবেন । এটি ওভার রাইট
       সিস্টেম )

3.  @core/auth ফোল্ডারটির অথেনটিকেশনের মাস্টার সার্ভিস হিসেবে ব্যবহার করা হবে। তবে আপাতত কোনো কিছু এখানে মডিফাই হবে না।
    মূলত ‍মাস্টার সার্ভিসেস গুলো ব্যবহার করা হবে । তবে এটি ওভার-রাইট করা হয়েছে ‍ ‍src/auth/jwt/useJwt.js ডিরেক্টরিতে।

4.  @core/components ফোল্ডারটির ফাইল গুলো হলো re-useable components যেগুলো ব্যবহার করে আপনি সুন্দর ডিজাইন করতে পারবেন। তবে মনে
    রাখবেন এখানে আগের থেকে থাকা ফাইলগুলো কোনোভাবে মডিফাই করবেন না। তাহলে সামগ্রিক ডিজাইন জনিত অসুবিধায় পড়বেন।

5.  @core/layouts ফোল্ডারটিতে থাকা ফাইলগুলো শুধুমাত্র বিভিন্ন Layout জনিত কম্পোনেন্টস এর জন্য। এখানে @core/layouts/components/footer/index ফাইলটি Footer কম্পোনেন্টস হিসেবে ব্যবহার হয়েছে এবং @core/layouts/components/navar ফোল্ডারটিতে Navigation জনিত বিভিন্ন
    কোম্পোনেন্সট রয়েছে। যা আপতত মডিফিকেশনের দরকার নেই।

## src/@fake-db Folder

1. এই ফোল্ডারটি মূলত ফেইক API calling এর জন্য তৈরি করা হয়েছে। ফোল্ডারটির root -এ থাকা mock.js ফাইলটিতে ‍axios কে inject করা হয়েছে।
   তবে আপনাকে আগে axios এবং axios-mock-adapter সম্পর্কে লেখাপড়া করতে হবে।

2. নতুন একটি মডেলের জন্য API তৈরি করতে হলে আপনাকে @fake-db/merchandising/buyerApi.js ফাইলটি ফলো করুন।

## src/assets Folder

1. এই ফোল্ডারটিতে **data**, **images** এবং **scss** তিনটি ফোল্ডার আছে।
2. **data** ফোল্ডারটি ডেমো ডাটা রাখা যাবে, **images** ফোল্ডারটিতে লোকালি ইমেইজ রাখা যাবে এবং **scss** ফোল্ডারটির
   style.scss ফাইলে গ্লোবাল CSS গুলো ওভার রাইট করা যাবে।

## src/auth Folder

1. ফোল্ডারটি মূলত অথেনটিকেশনের সার্ভিসগুলোর ওভার রাইট করার জন্য ব্যবহার করা হবে। আপতত এখানে কোনো কাজ করার দরকার নেই।
2. এটা পরে আপডেট করা হবে।

## src/config Folder

1. এই ফোল্ডারটিতে থাকা **themeConfig.js** ফাইলটি দ্বারা শুধুমাত্র UI layout এর সেটিং ঠিক করা হবে। আপতত এখানে মডিফিকেশন করার দরকার নেই।

## src/documents Folder

1. এই ফোল্ডার শুধুমাত্র ডুকিউমেন্টগুলো থাকবে। তবে ডুমেন্টস এর ফরম্যাট অবশ্যই .md বা .txt হতে পারে। আপনি চাইলে নিজের কোনো টেক্স
   ফাইল এখানে রাখতে পারেন । তবে নিজের ফাইলের আগে নিজের নাম ব্যবহার করতে হবে ।

## src/layouts Folder

1. ফোল্ডারটিতে থাকা দুটি ফাইল :**HorizontalLayout.js** এবং **VerticalLayout.js** দ্বারা যথাক্রমে @core/layouts/HorizontalLayout.js
   এবং @core/layouts/VerticalLayout.js কে ইনজেক্ট করা হয়েছে । এখানে আরো ফিচার ওভার রাইট করা হয়েছে। তবে মডিফাই করার দরকার নেই।

## src/navigation Folder

1. এখানে থাকা দুটি ফোল্ডার **horizontal** এবং **vertical** এর **index** ফাইল দ্বারা Horizontal এবং Vertical নেভিগেশন মেনুর লিঙ্ক
   ডিকলার করা হয়েছে।
2. তবে এই দুটি ফাইলকে পরবর্তীতে গ্লোবালী কন্ট্রোল করা হবে।

## src/redux Folder

1. এটি প্রজেক্টের সবচেয়ে গুরুত্বপূর্ণ ফোল্ডার । কারণ এটি দ্বারা সবধরনের **state** কন্ট্রোল করা হবে।
2. যথাক্রমে **actions**, **actionTypes**, **reducers** এবং **storeConfig** নামের চারটি ফোল্ডার আছে।

   1. **storeConfig** ফোল্ডারের ‍**store** ফাইলটিতে Redux Implement করা হয়েছে। এবং **src/redux/reducers/rootReducer** কে Inject করা হয়েছে।
   2. **actionTypes** এর ইনডেক্স ফাইল দ্বারা মূলত মেইন একশনগুলোর টাইপ বলা হয়েছে। Action Type হলো Action ও Reducer কে একই নামে চিনিয়ে
      দেয়া যাতে এটি কি ধরনের একশন হবে এবং কি ধরনের ডাটা স্টোর করবে।
   3. **actions** এখানে রিডাক্স এর একশন গুলো রয়েছে। এই ফোল্ডারে তিন ধরনের একশন রয়েছে।

      1. **auth** -এ শুধুমাত্র অথেনটিকেশন জনিত একশনগুলো ডিকলার করা হয়েছে। আপতত মডিফিকেশন করার দরকার নেই।
      2. **layout** -এ Layout জনিত একশনগুলো রয়েছে। এটির মডিফিকেশন কখনও হবে না।
      3. **navbar** -এ নেভিগেশন জনিত একশনগুলো রয়েছে। পরবর্তীতে আরো একশন বাড়তে পারে বা কমতে পারে।

   4. **reducers** এখানে রিডাক্স এর একশন গুলো রয়েছে। এই ফোল্ডারে তিন ধরনের রিডিউচার ফোল্ডার রয়েছে এবং
      একটি **rootReducer.js** ফাইল রয়েছে।

      1. **auth** -এ শুধুমাত্র অথেনটিকেশন জনিত রিডিউচার ডিকলার করা হয়েছে। আপতত মডিফিকেশন করার দরকার নেই।
      2. **layout** -এ Layout জনিত রিডিউচারগুলো রয়েছে। এটির মডিফিকেশন কখনও হবে না।
      3. **navbar** -এ নেভিগেশন জনিত রিডিউচার রয়েছে। পরবর্তীতে আরো রিডিউচার বাড়তে পারে বা কমতে পারে।
      4. **rootReducer.js** এ মূলত লোকাল রিডিউচারগুলোকে গ্লোবালী **state** আকারে পাওয়ার জন্য এক্সপোর্ট করা হয়।

## src/router Folder

1.  এই ফোল্ডারটি মূলত রাউট কনট্রোল করতে ব্যবহার হয়েছে।
2.  ফোল্ডারটিতে একটি ফোল্ডার **routes** এবং একটি ফাইল **Router.js** রয়েছে।
    1.  **routes/index.js** দ্বারা রাউট ডিকলার করা হয়েছে।
    2.  **Router.js** ফাইলটিতে কনডিশনারি রাউট চেক করা হয়েছে। কি ধরনের রাউট হলে কি টাইপের Layout দেখাবে তা নির্ধারণ করা হয়েছে ।
        তিনটি Layout হলো **BlankLayout**, **VerticalLayout**, **HorizontalLayout**

## src/utility Folder

1. ফোল্ডারটি মূলত Tamplate Customs Context, Customs Hook এবং বিভিন্ন ফরম্যাটিং জনিত ফাংশনগুলো এখানে রয়েছে। নতুন করে এড করা যাবে
   তবে আগের ফাইলের কোনো পরিবর্তন করা যাবে না।

## src/view Folder

1. এখানে **Module** বেইসড UI তে দৃশ্যমান সবধরনের **components** থাকবে।
2. একটি মেইন **Module** থাকবে (যেমন: **merchandising**) । তার মধ্যে **Sub-Moudle** ( যেমন: **merchandising/buyer**) থাকবে।
3. প্রত্যেক Sub-Moudle এর তিনটি নেস্টেড ফোল্ডার থাকবে।
4. ফোল্ডার গুলো হলো **form** ,**list** , **store**.

   1.**form** ফোল্ডারটিতে ফর্ম রিলেটেড ফাইল থাকবে । যেমন : **BuyerAddForm.js**, **BuyerEditForm.js**.

   2. **list** ফোল্ডারটিতে **Table** রিলেটেড ফাইল থাকে । যেমন : **BuyerList.js**, **BuyerTableColumns.js**, **BuyerExandRow.js**, **index.js**
      . **index.js** ফাইলে **BuyerList** কে নেস্টেড করা হয়েছে। এবং এখানে **scss** ইমপোর্ট করা হয়েছে যাতে বাকি লিস্ট ফর্মে একই CSS পায়। 2. **BuyerTableColumns** টিতে কলামগুলোকে Array আকারে ডিকলার করে এর List State (**buyers**) এর সাথে কম্বাইন করা হয়েছে।
      তাছড়া এখানে **Details**, **Edit**, **Delete** এর **Action** গুলোকে কল করা হয়েছে। 3. **BuyerExandRow.js** দ্বারা একটা Row এর আরো ডিটেইল্স থাকলে তা দেখানো যাবে। মানে অতিরিক্ত ডাটা এখানে দেখানো যাবে।
   3. **store** ফোল্ডারটিতে তিনটি নেস্টেড ফোল্ডার আছে যা **Redux** এর **ActionType**, **Action**, **Reducer** কে **Implement**
      করা হয়েছে।
      1. **actionTypes** ফোল্ডারটিতে একশনের টাইপগুলোকে ডিকলার করা হয়েছে।
      2. **actions** এখানে সাব-মডিউল রিলেটেড সব ধরনের একশন / ফাংশন ডিকলার করা হয়েছে যা **API call** এর জন্য ব্যবহার করা হচ্ছে।
      3. **reducers** এখানে সাব-মডিউল রিলেটেড সব ধরনের **State** কে **reducers** দ্বারা বাইন্ড করা হয়েছে **Action Type** অনুসারে।
         এবং **reducers** এর **index.js** কে একটি নির্দিষ্ট নামে (**buyers**) বাইন্ড করা হয় **src/redux/reducers/rootReducers.js** এই ফাইলটিতে। যা পরবর্তীতে গ্লোবাল স্টোর হিসেবে পাওয়া যায়।

## config-overrides.js

1.  এটিতে বিভিন্ন ডিকেটরিগুলোকে শর্ট করা হয়েছে; ('@components': 'src/@core/components' ),)
2.  তবে এর মধ্যে আগের থেকে আছে এমন কিছু মডিফাই করা যাবে না।

## Role :

1. Local Funtion এর ক্ষেত্রে অবশ্যই Prefix হিসেবে handle ব্যবহার করাতে হবে। যেমন : handleCancel, handleRemove , handleSubmit ইত্যাদি
