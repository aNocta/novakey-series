import { createLazyRoute } from '@tanstack/react-router'
import { SeriesSelection } from '../../components/SeriesSelection';

export const Route = createLazyRoute('/for-house')({
    component: ForHouse
});

function ForHouse() {
    return (<>
        <SeriesSelection location="house" />
    </>)
}