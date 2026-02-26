import React from 'react'

const ContactMap = () => {
  return (
    <div className='contact-map w-full h-[550px] px-4 md:px-6 lg:px-10 xl:px-20 py-20'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.5104994710837!2d68.33791817416095!3d25.387717023959734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x394c709957d09bb7%3A0x6bbd8e51df1d07a!2sMA%20Rangoon%20Wala%20Community%20Centre!5e0!3m2!1sen!2s!4v1771349772129!5m2!1sen!2s"
        className='w-full h-96 border-0'
        loading='lazy'
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
        title="MA Rangoon Wala Community Centre"
      ></iframe>
    </div>
  )
}

export default ContactMap;
