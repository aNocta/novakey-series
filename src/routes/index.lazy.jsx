import { createLazyFileRoute } from '@tanstack/react-router'
import { SeriesSelection } from '../components/SeriesSelection';

export const Route = createLazyFileRoute('/')({
    component: () => <App />
})

function App() {
    return (<>
        <SeriesSelection location="room" />
    </>)
}