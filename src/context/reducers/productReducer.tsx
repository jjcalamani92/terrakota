import { types } from '../types/types';

const initialState = {
    products: [
        {
            id: 1,
            title: 'JOYERO COFRE GRANDE',
            titleURL: 'joyero-cofre-grande',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646870273/terrakota/products/joyeros/joyero-cofre-grande/IMG-20211209-WA0031_copy_600x800_tkz0tr.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646870264/terrakota/products/joyeros/joyero-cofre-grande/IMG-20211209-WA0012_copy_600x800_s9eo1a.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646870254/terrakota/products/joyeros/joyero-cofre-grande/IMG-20211209-WA0028_copy_600x800_iuyfwx.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646870245/terrakota/products/joyeros/joyero-cofre-grande/IMG-20211209-WA0029_copy_600x800_sq5mup.jpg',
            ],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
            dimensiones: '25[cm] * 32[cm] * 18[cm]',
            material: 'madera pino procesada',
            category: 'joyeros',
            oldPrice: '560',
            price: '480',
        },
        {
            id: 2,
            title: 'JOYERO GIGANTE',
            titleURL: 'joyero-gigante',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872052/terrakota/products/joyeros/joyero%20gigante/IMG-20211209-WA0024_copy_600x800_dq6nho.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872043/terrakota/products/joyeros/joyero%20gigante/IMG-20211209-WA0026_copy_600x800_p7ddo4.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872026/terrakota/products/joyeros/joyero%20gigante/IMG-20211209-WA0025_copy_600x800_bbfsw6.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872015/terrakota/products/joyeros/joyero%20gigante/IMG-20211209-WA0027_copy_600x800_pmpzdg.jpg',
            ],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
            dimensiones: '40[cm] * 32[cm] * 25[cm]',
            material: 'madera pino procesada',
            category: 'joyeros',
            oldPrice: '700',
            price:'620',
        },
        
        {
            id: 3,
            title: 'JOYERO PUERTAS',
            titleURL: 'joyero-puertas',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872788/terrakota/products/joyeros/joyero%20puertas/IMG-20211209-WA0017_copy_600x800_icqpa8.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872809/terrakota/products/joyeros/joyero%20puertas/IMG-20211209-WA0020_copy_600x800_zwkegj.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872821/terrakota/products/joyeros/joyero%20puertas/IMG-20211209-WA0021_copy_600x800_h5ih9w.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872821/terrakota/products/joyeros/joyero%20puertas/IMG-20211209-WA0021_copy_600x800_h5ih9w.jpg',
            ],
            description: "Personalizado oscuro de lujo para joyería. Caja de madera, caja joyería, cajón caja de almacenamiento, caja de regalo, caja secreta, organizador sin cerradura.",
            dimensiones: '43[cm] * 50[cm] * 20[cm]',
            material: 'madera pino procesada',
            category: 'joyeros',
            oldPrice: '670',
            price:'570',
        },
        {
            id: 4,
            title: 'JOYERO MAPLE',
            titleURL: 'joyero-maple',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646873181/terrakota/products/joyeros/joyero%20maple/JOYERO-MAPLE-4_ec91vb.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646873167/terrakota/products/joyeros/joyero%20maple/8-1_degznm.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646873200/terrakota/products/joyeros/joyero%20maple/1-4_w7uhgt.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646873217/terrakota/products/joyeros/joyero%20maple/2-4_dnifuu.jpg',
            ],
            description: " Personalizado oscuro de lujo para joyería. Caja de madera, caja joyería, cajón caja de almacenamiento, caja de regalo, caja secreta, organizador con cerradura.",
            dimensiones: '43[cm] * 50[cm] * 20[cm]',
            material: 'madera pino procesada',
            category: 'joyeros',
            oldPrice: '670',
            price:'570',
        },
        {
            id: 5,
            title: 'JOYERO MARY',
            titleURL: 'joyero-mary',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872614/terrakota/products/joyeros/joyero%20mary/IMG-20210311-WA0034_xo5x5l.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872576/terrakota/products/joyeros/joyero%20mary/IMG-20210512-WA0039_zh4xij.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872588/terrakota/products/joyeros/joyero%20mary/IMG-20210512-WA0009_tygozd.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646872598/terrakota/products/joyeros/joyero%20mary/IMG-20210311-WA0033_v8juk0.jpg',
            ],
            description: "Personalizado oscuro de lujo para joyería. Caja de madera, caja joyería, cajón caja de almacenamiento, caja de regalo, caja secreta, organizador sin cerradura.",
            dimensiones: '34[cm] * 32[cm] * 25[cm]',
            material: 'madera pino procesada',
            category: 'joyeros',
            oldPrice: '600',
            price:'520',
        },
        {
            id: 6,
            title: 'almohada corazon',
            titleURL: 'almohada-corazon',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839102/terrakota/products/peluches/2-25_bpgxs6.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839117/terrakota/products/peluches/1-28_trvtvu.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839145/terrakota/products/peluches/2-27_r3c98y.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839179/terrakota/products/peluches/2-23_hw9mrw.jpg',
            ],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
            dimensiones: '25[cm] * 32[cm] * 18[cm]',
            material: 'madera pino procesada',
            category: 'peluches',
            oldPrice: '560',
            price: '480',
        },
        {
            id: 7,
            title: 'almohadas unicornio',
            titleURL: 'almohadas-unicornio',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839117/terrakota/products/peluches/1-28_trvtvu.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839117/terrakota/products/peluches/1-28_trvtvu.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839117/terrakota/products/peluches/1-28_trvtvu.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839117/terrakota/products/peluches/1-28_trvtvu.jpg',
                
            ],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
            dimensiones: '25[cm] * 32[cm] * 18[cm]',
            material: 'madera pino procesada',
            category: 'peluches',
            oldPrice: '560',
            price: '480',
        },
        {
            id: 8,
            title: 'BEBÉ INCREIBLE',
            titleURL: 'bebe-increible',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839145/terrakota/products/peluches/2-27_r3c98y.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839145/terrakota/products/peluches/2-27_r3c98y.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839145/terrakota/products/peluches/2-27_r3c98y.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839145/terrakota/products/peluches/2-27_r3c98y.jpg',
                
            ],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
            dimensiones: '25[cm] * 32[cm] * 18[cm]',
            material: 'madera pino procesada',
            category: 'peluches',
            oldPrice: '560',
            price: '480',
        },
        {
            id: 9,
            title: 'CONEJO GRANDE',
            titleURL: 'conejo-grande',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839179/terrakota/products/peluches/2-23_hw9mrw.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839179/terrakota/products/peluches/2-23_hw9mrw.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839179/terrakota/products/peluches/2-23_hw9mrw.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646839179/terrakota/products/peluches/2-23_hw9mrw.jpg',
                
            ],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
            dimensiones: '25[cm] * 32[cm] * 18[cm]',
            material: 'madera pino procesada',
            category: 'peluches',
            oldPrice: '560',
            price: '480',
        },
        {
            id: 10,
            title: 'baul',
            titleURL: 'baul',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646887453/terrakota/products/muebles/3-30_bkebdm.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646887483/terrakota/products/muebles/4-29_rqa2vk.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646887513/terrakota/products/muebles/5-25_lgbajz.jpg',
                
            ],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
            dimensiones: '25[cm] * 32[cm] * 18[cm]',
            material: 'madera pino procesada',
            category: 'muebles',
            oldPrice: '560',
            price: '480',
        },
        {
            id: 11,
            title: 'porta llaves casita',
            titleURL: 'porta-llaves-casita',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646887715/terrakota/products/para%20el%20hogar/porta%20llaves%20casita/4-14_dj1xds.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646887654/terrakota/products/para%20el%20hogar/porta%20llaves%20casita/3-14_itliu4.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646887621/terrakota/products/para%20el%20hogar/porta%20llaves%20casita/1-15_ftskhy.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646887573/terrakota/products/para%20el%20hogar/porta%20llaves%20casita/7-8_ljnpir.jpg',
                
            ],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
            dimensiones: '25[cm] * 32[cm] * 18[cm]',
            material: 'madera pino procesada',
            category: 'para-el-hogar',
            oldPrice: '560',
            price: '480',
        },
        {
            id: 12,
            title: 'porta vinos',
            titleURL: 'porta-vinos',
            image: [
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646929351/terrakota/products/para%20la%20cocina/porta%20vinos/1-19_wzv6ek.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646929360/terrakota/products/para%20la%20cocina/porta%20vinos/20211129_180712_copy_600x600_xfpsrj.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646929369/terrakota/products/para%20la%20cocina/porta%20vinos/20211129_180728_copy_600x600_pvjzp9.jpg',
                'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646929378/terrakota/products/para%20la%20cocina/porta%20vinos/20211129_180721_copy_600x600_vw7xhd.jpg',
                
            ],
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.`,
            dimensiones: '25[cm] * 32[cm] * 18[cm]',
            material: 'madera pino procesada',
            category: 'para-la-cocina',
            oldPrice: '560',
            price: '480',
        },
    ],
    activeProduct: null,
    index: 0
}

export const productReducer = ( state = initialState, action: any ) => {
    switch (action.type) {
        case types.setImage:
            return {
                ...state,
                index: action.i
            }
        default:
            return state;
    }
}