import {
    useQuery,
    gql
} from "@apollo/client";
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'


const LAUNCHES_QUERY= gql`
    query LaunchesQuery{
        launches{
            flight_number
            name
            date_local
            success
            id
        }
    }
`


const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p>Error :</p>;

    console.log(data)
    return <div>
        <h1 className="display-4 my-3">Launches</h1>
        <MissionKey />
        {
            data.launches.map(launch=>(
                <LaunchItem key={launch.flight_number} launch={launch} />
            ))
        }
    </div>

}

export default Launches
