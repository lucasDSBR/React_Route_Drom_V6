import './style.css';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';

export const Posts = () => {
    const params = useParams();
    const [qs] = useSearchParams();
    return (
        <div>
            <h1>Post {`Para: ${params.id}`} {`QS: ${qs.get('nome')}`}</h1>
            <Outlet/>
        </div>
    )
}