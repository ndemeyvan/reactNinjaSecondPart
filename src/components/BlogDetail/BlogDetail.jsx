import {useParams} from 'react-router-dom'

const BlogDetail = () => {

    const  id  = useParams()["id"];

    return ( 
        <div>
            <h3>Welcome to detail page - { id }</h3>
        </div>
     );
}
 
export default BlogDetail;