import React from 'react'
import { useSelector } from 'react-redux'

const getDescription = ({ projectName }) => {

    const background = useSelector(state => state.background)
    const fontSize = useSelector(state => state.fontSize)

    switch (projectName) {
        case "Twitter Theme customization":
            return <div>
                <p className='my-4'>This is Theme Customization like Twitter where one cna change font-size , colors of the text and background.</p>

                <h1 className='mt-3 font-bold' style={{ fontSize: fontSize.lg }}>Packages Used :</h1>
                <ul className='mt-2'>
                    <li className='ml-3'>• @reduxjs/toolkit</li>
                    <li className='ml-3'>• redux-redux</li>
                    <li className='ml-3'>• react-icons</li>
                    <li className='ml-3'>• react-step-progress-bar</li>
                    <li className='ml-3'>• tailwindcss</li>
                    <li className='ml-3'>• typescript</li>
                </ul>

                <h1 className='mt-4 font-bold' style={{ fontSize: fontSize.lg }}>Things that can be improved</h1>
                <ul className='mt-2'>
                    <li className='ml-3'>• State can be preserved through localstorage or redux-persist</li>
                    <li className='ml-3'>• Animations can be added by using framer-motion</li>
                    <li className='ml-3'>• Headless UI ("UI components, designed to integrate beautifully with Tailwind CSS") can be used to create modals easily  </li>
                    <li className='ml-3'>• Ui design can be improved</li>
                </ul>
            </div>

        case "personal blog website":
            return <div>
                <p className='my-4'>This is my Blogging website where i upload content related to programming or web development. I have used grphcms for the content management</p>

                <h1 className='mt-3 font-bold' style={{ fontSize: fontSize.lg }}>Packages Used :</h1>
                <ul className='mt-2'>
                    <li className='ml-3'>• graphql</li>
                    <li className='ml-3'>• graphql-request</li>
                    <li className='ml-3'>• html-react-parser</li>
                    <li className='ml-3'>• moment</li>
                    <li className='ml-3'>• react-code-blocks</li>
                    <li className='ml-3'>• react-icons</li>
                    <li className='ml-3'>• react-multi-carousel</li>
                    <li className='ml-3'>• tailwindcss</li>
                </ul>

                <h1 className='mt-3 font-bold' style={{ fontSize: fontSize.lg }}>Things that can be improved :</h1>
                <ul>
                <li className='ml-3'>• Video tutorials can be added</li>
                <li className='ml-3'>• Frequently asked questions (FAQs) functionality can be added for the users</li>
                </ul>
            </div>

        case "Ecommerce Store":
            return <div>
                <p className='my-4'>This is an ecommmerce store with fully functional cart and backend. sanity is used to manage the content of the website</p>

                <h1 className='mt-3 font-bold' style={{ fontSize: fontSize.lg }}>Packages Used :</h1>
                <ul className='mt-2'>
                    <li className='ml-3'>• @sanity/client</li>
                    <li className='ml-3'>• @sanity/image-url</li>
                    <li className='ml-3'>• canvas-confetti</li>
                    <li className='ml-3'>• next-sanity-image</li>
                    <li className='ml-3'>• react-hot-toast</li>
                    <li className='ml-3'>• react-icons</li>
                </ul>
                <h1 className='mt-3 font-bold' style={{ fontSize: fontSize.lg }}>Things that can be improved :</h1>
                <ul className='mt-2'>
                    <li className='ml-3'>• payment system can be added</li>
                </ul>
                
            </div>

        case "Deliveroo-clone":
            return <div>
                <h1>No description yet</h1>

                <h1 className='mt-3 font-bold' style={{ fontSize: fontSize.lg }}>Packages Used :</h1>
                <ul className='mt-2'>
                  <li>• @react-navigation/native</li>
                  <li>• @react-navigation/native-stack</li>
                  <li>• @react-navigation/stack</li>
                  <li>• @reduxjs/toolkit</li>
                  <li>• @sanity/client</li>
                  <li>• @sanity/image-url</li>
                  <li>• expo</li>
                  <li>• expo-status-bar</li>
                  <li>• nativewind</li>
                  <li>• react</li>
                  <li>• react-native</li>
                  <li>• react-native-animatable</li>
                  <li>• react-native-gesture-handler</li>
                  <li>• react-native-map</li>
                  <li>• react-native-progress</li>
                  <li>• react-native-safe-area-contex</li>
                  <li>• react-native-screens</li>
                  <li>• react-native-svg</li>
                  <li>• react-native-url-polyfill</li>
                  <li>• react-native-vector-icons</li>
                  <li>• react-redux</li>
                </ul>

                <h1 className='mt-3 font-bold' style={{ fontSize: fontSize.lg }}>Things that can be improved :</h1>
                <ul className='mt-2'>
                    <li className='ml-3'>• payment system can be added</li>
                </ul>
            </div>

        case "Airbnb-clone":
            return <div>
                <h1>This is a fullStack Airbnb Clone using Next.js 13 with Login Validation & Authentication where one can explore different places and also can filter places, can add in my trips , in reservations, favourites. You can explore your properties that you have uploaded
                </h1>
                <h1 className='mt-3 font-bold' style={{ fontSize: fontSize.lg }}>Packages Used :</h1>
                <ul className='mt-2'>
                  <li>• @next-auth/prisma-adapter</li>
                  <li>• @prisma/client</li>
                  <li>• axios</li>
                  <li>• bcrypt</li>
                  <li>• date-fns</li>
                  <li>• next-auth</li>
                  <li>• next-cloudinary</li>
                  <li>• query-string</li>
                  <li>• react-date-range</li>
                  <li>• react-hook-form</li>
                  <li>• react-hot-toast</li>
                  <li>• react-icons</li>
                  <li>• react-leaflet</li>
                  <li>• react-select</li>
                  <li>• react-spinners</li>
                  <li>• typescript</li>
                  <li>• world-countries</li>
                  <li>• zustand</li>
                  <li>• prisma</li>
                  <li>• tailwindcss</li>
                </ul>

                <h1 className='mt-3 font-bold' style={{ fontSize: fontSize.lg }}>Things that can be improved :</h1>
                <ul className='mt-2'>
                    <li className='ml-3'>• live location map can be added</li>
                </ul>
            </div>

        case "ShareFeed":
            return <div>
                <h1>This is a Photo sharing app with login , validation and authentication where one can upload photos and you can see comments and can filter pictures on the basis categories
                </h1>
                <h1 className='mt-3 font-bold' style={{ fontSize: fontSize.lg }}>Packages Used :</h1>
                <ul className='mt-2'>
                  <li>• @next-auth/prisma-adapter</li>
                  <li>• @prisma/client</li>
                  <li>• axios</li>
                  <li>• bcrypt</li>
                  <li>• date-fns</li>
                  <li>• next-auth</li>
                  <li>• next-cloudinary</li>
                  <li>• query-string</li>
                  <li>• react-date-range</li>
                  <li>• react-hook-form</li>
                  <li>• react-hot-toast</li>
                  <li>• react-icons</li>
                  <li>• react-leaflet</li>
                  <li>• react-select</li>
                  <li>• react-spinners</li>
                  <li>• typescript</li>
                  <li>• world-countries</li>
                  <li>• zustand</li>
                  <li>• prisma</li>
                  <li>• tailwindcss</li>
                </ul>

                <h1 className='mt-3 font-bold' style={{ fontSize: fontSize.lg }}>Things that can be improved :</h1>
                <ul className='mt-2'>
                    <li className='ml-3'>• live location map can be added</li>
                </ul>
            </div>

        default:
            return <h1>No description yet</h1>
    }

}

export default getDescription