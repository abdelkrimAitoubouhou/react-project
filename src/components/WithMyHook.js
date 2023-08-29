import {useParams} from "react-router-dom";

function withMyHook(Component) {
    return function WrappedComponent(props) {
        const patId = useParams();
        return <Component {...props} patId={patId} />;
    }
}