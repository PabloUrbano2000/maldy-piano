import { useEffect, useRef, useState } from "react";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

export const useFetch = (url) => {
  // con el useRef guardamos la referencia de que si se usa el customHook
  const isMounted = useRef(true);

  // creamos un useState con el siguiente cuerpo
  /*
    data: el cuerpo recibido de la solicitud
    loading: validador si la petición finalizó correctamente
    error: en caso la solicitud caiga en catch
  */
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // el return del useEffect es para cuando se desmonte este componente
    // se elimine toda la data y no quede como recursos en memoria
    return () => {
      isMounted.current = false;
    };
  }, []);

  // este useEffect se va usar cada cuando la url se modifique
  useEffect(() => {
    // retornamos a los valores iniciales del hook
    setState(initialState);

    // consultamos usando fetch
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // en caso exista un current(en este caso seria true, lo que se declaró cuando se incializó)
        if (isMounted.current) {
          // modificamos el cuerpo del state con lo recibido
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      })
      .catch(() => {
        // en caso haya un error modificar el cuerpo
        setState({
          data: null,
          loading: false,
          error: "No se puede cargar la info",
        });
      });
  }, [url]);

  // finalmente se retorna el state con lo obtenido
  return state;
};
