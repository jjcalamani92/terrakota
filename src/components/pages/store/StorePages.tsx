import { CategoryLayout } from '../../layouts/category/CategoryLayout';
import { HeadingPrimary, HeadingSecondary } from '../../layouts/heading/HeadingLayouts';
import { ProductComponent } from '../product/ProductComponent';
import { StoreComponent } from './StoresComponent';

export const StorePages = () => {
  return (
    <>
      <HeadingPrimary titleP="Nuestra tienda" />
      <HeadingSecondary title="Nuestras categorias" category="#" />
      <CategoryLayout/>

      <HeadingSecondary title="Peluches" category="/peluches" />
      <StoreComponent category="peluches"  categoryTitle=""/>

      <HeadingSecondary title="Joyeros" category="/joyeros" />
      <StoreComponent category="joyeros"  categoryTitle=""/>

      <HeadingSecondary title="muebles" category="/muebles" />
      <StoreComponent category="muebles"  categoryTitle=""/>


    </>
  )
}
