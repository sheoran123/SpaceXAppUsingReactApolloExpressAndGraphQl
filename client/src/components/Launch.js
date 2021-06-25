import {
    useQuery,
    gql
} from "@apollo/client";
import {Link} from 'react-router-dom'
import ClassNames from 'classnames'
import { useLocation } from 'react-router-dom'


const LAUNCH_QUERY=gql`
    query LaunchQuery($id: String!){
        launch(id : $id){
            flight_number
            name
            date_local
            success
        }
    }
`


const Launch = () => {
    let location = useLocation();
    const id =location.pathname.slice(8)

    const { loading, error, data } = useQuery(LAUNCH_QUERY,{
        variables: { id },
    })
    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p>Error :</p>;

    return <div>
            <h1 className="display-4 my-3"><span className="text-dark">Mission:</span>{data.launch.name}</h1>
            <h4 className="mb-3">Launch Details</h4>
            <ul className="list-group">
                <li className="list-group-item">Flight Number :{data.launch.flight_number}</li>
                <li className="list-group-item">Launch Success :{data.launch.success? 'Yes':'NO'}</li>
                <li className="list-group-item">Date :{data.launch.date_local}</li>
            </ul>
            <hr />
            <Link to="/" className="btn btn-secondary">BACK</Link>
        </div>
}

export default Launch
