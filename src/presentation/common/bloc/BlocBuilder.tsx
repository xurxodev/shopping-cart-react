import {useState, useEffect} from "react";
import Bloc from "./Bloc";

interface BlocBuilderProps<B extends Bloc<S>, S> {
    bloc: B;
    builder: (state: S) => JSX.Element;
}

const BlocBuilder = <B extends Bloc<S>, S>({bloc, builder}: BlocBuilderProps<B, S>) => {
    const [state, setState] = useState(bloc.state);

    useEffect(() => {
        const stateSubscription = (state: S) => {
            setState(state);
        };

        bloc.subscribe(stateSubscription);

        return () => bloc.unsubscribe(stateSubscription);
    }, [bloc]);

    return builder(state);
};

export default BlocBuilder;
