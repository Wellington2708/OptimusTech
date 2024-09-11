import Card from '../Card';


const metric = [
    {
        number: '400+',
        subtitle: 'Completed projects',
        description: "We've helped build over 400 amazing projects."

    },
    {
        number: '100+',
        subtitle: 'Contributors',
        description: 'We have over 100 employees on our team who care about our customers.'

    },
    {
        number: '20k',
        subtitle: 'Downloads',
        description: 'Our designs that are available in stores have already been downloaded more than 20,000 times.'

    },
    {
        number: '500+',
        subtitle: '5 star reviews',
        description: 'We are proud to have over 500 5-star reviews on our products.'

    }
]

function MetricList() {
    return (
        <>
            {metric.map((item, index) => (
                <Card 
                    key={index} 
                    number={item.number} 
                    subtitle={item.subtitle} 
                    description={item.description} 
                />
            ))}
        </>
    );
}

export default MetricList;