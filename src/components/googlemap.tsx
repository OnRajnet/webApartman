import * as React from 'preact'; 

export const GoogleMapComponent = () => {
  return (
    <div class="my-16">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10126.597248623197!2d15.687517182874586!3d50.6150536253309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e93558512ca99%3A0x81ca90e85619cfb!2zxIxpc3TDoSB2IEtya29ub8Whw61jaCwgNTQzIDQ0IMSMZXJuw70gRMWvbA!5e0!3m2!1scs!2scz!4v1696951197465!5m2!1scs!2scz"
        width="100%"
        height="450"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        />
    </div>
  );
};
