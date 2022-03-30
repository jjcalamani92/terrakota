const initialState = {
  banners: [
    {
      id: 1,
      title: "Hasta el 30% de descuento",
      content: "oferta limitada",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646943669/terrakota/banner/banner-1_v0uxbx.webp",
    },
    {
      id: 2,
      title: "Hasta el 20% de descuento",
      content: "oferta limitada",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646943674/terrakota/banner/banner-2_htkzie.webp",
    },
    {
      id: 3,
      title: "Hasta el 10% de descuento",
      content: "oferta limitada",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646943681/terrakota/banner/banner-3_yvikbf.webp",
    },
    
  ],
  activeBanner: null,
};

export const bannerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
