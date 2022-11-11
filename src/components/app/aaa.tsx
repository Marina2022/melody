import React, {ComponentType} from "react";

type WithLoadingProps = {
  loading: boolean
}

const withLoading = <T extends object>(Component: ComponentType<T>) =>
  class WithLoading extends React.Component<T & WithLoadingProps > {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <LoadingSpinner /> : <Component {...props as T} />;
    }
  };

const LoadingSpinner = (): JSX.Element => <></>

// return WithLoading
// Ааа, кароч.. теперь этому компоненту можно передать Loading
// (ну например из родителя)

// рендер пропс в ребенке, хха

type MamaProps = {
  children: any
}

export const Mama = ({children}: MamaProps)=> {
  return <div>{children(200)}</div>
}
