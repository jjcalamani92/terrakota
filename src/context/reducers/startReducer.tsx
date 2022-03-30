const initialState = {
  links: ["nosotros", "productos", "portafolio", "contacto", "blogs"],
  productos:["monofocales", "maquillaje", "bifocales"],
  activeLinks: null
};

export const startReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
