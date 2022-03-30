const initialState = {
  sliders: [
    {
      id: 1,
      title: "Reloj artesanal",
      content: "productos recien fabricados",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646941474/terrakota/home/IMG-20210311-WA0043_aikeoq.jpg",
    },
    {
      id: 2,
      title: "JOYERO MARY",
      content: "productos recien fabricados",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646830757/terrakota/home/IMG-20210311-WA0033_so2uns.jpg",
    },
    {
      id: 3,
      title: "OSO PELUCHE",
      content: "productos recien fabricados",
      image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646941585/terrakota/home/1-23_lkskb2.jpg",
    },
  ],
  activeSlider: null,
};

export const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
