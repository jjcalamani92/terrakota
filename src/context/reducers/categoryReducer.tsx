const initialState = {
  categories: [
    {
      id: 6,
      title: "peluches",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646835937/terrakota/category/2462256_nikxla.png",
    },
    {
      id: 7,
      title: "joyeros",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646835966/terrakota/category/2022260_zw1azq.png",
    },
    {
      id: 8,
      title: "muebles",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646836084/terrakota/category/3456955_rwdo3t.png",
    },
    {
      id: 8,
      title: "regalos",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646836137/terrakota/category/1692277_zaqcyf.png",
    },
    {
      id: 3,
      title: "mesa de esquina",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646831957/terrakota/category/icon-3_snuebe.webp",
    },
    {
      id: 4,
      title: "silla de oficina",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646831961/terrakota/category/icon-4_pcaald.webp",
    },
    {
      id: 5,
      title: "guardarropa",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646831965/terrakota/category/icon-5_dlgwq9.webp",
    },
    
    
  ],
  activeCategory: null,
};

export const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
