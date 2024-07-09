import React, { Suspense, lazy, ElementType } from 'react';
import Loading from "../loading/Loading";

export const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

export const AnimalsView = Loadable(lazy(() => import('../../views/animals/Animals')));
export const Page404 = Loadable(lazy(() => import('../../views/errors/Page404')));

export const ANIMALS_LINK = '/';
