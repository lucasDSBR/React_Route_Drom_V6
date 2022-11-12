import './style.css';
import { useParams, useSearchParams } from 'react-router-dom';

export const Post = () => {
    const params = useParams();
    const [qs] = useSearchParams();
    return (
        <div>
            <h1>Post {`Para: ${params.id}`} {`QS: ${qs.get('nome')}`}</h1>
        </div>
    )
}