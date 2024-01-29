import Tour from './Tour';
const tours = [
  {
    id: 1,
    image: 'https://www.lomamatkalle.fi/wp-content/uploads/lomamatkat-vaasasta.jpg',
    date: '2024-01-01',
    title: 'Tour 1',
    location: 'indonesia',
    duration: '10',
    cost: '1000'
  },
  {
    id: 2,
    image: 'https://lomaco.fi/wp-content/uploads/2021/05/sebastian-pena-lambarri-Yaia5KzMI-Y-unsplash-scaled.jpg',
    date: '2024-01-02',
    title: 'Tour 2',
    location: 'turkey',
    duration: '16',
    cost: '5000'
  },
  {
    id: 3,
    image: 'https://media.cntraveler.com/photos/56fd4d7a031da97d43d11079/master/pass/budapest-GettyImages-178060240.jpg',
    date: '2024-01-03',
    title: 'Tour 3',
    location: 'england',
    duration: '3',
    cost: '10004'
  },
  {
    id: 4,
    image: 'https://www.thefivefoottraveler.com/wp-content/uploads/2016/09/IMG_7935.jpg',
    date: '2024-01-04',
    title: 'Tour 4',
    location: 'finland',
    duration: '6',
    cost: '1342'
  },
  // more tour objects...
];
function Tours() {
  return (
    <section className="section" id="tours">
          <div className="section-title">
            <h2>featured <span>tours</span></h2>
          </div>
          <div className="section-center featured-center">
          {tours.map((tour) => (
                <Tour key={tour.id} {...tour} />
                ))}
          </div>
        </section>
  );
}

export default Tours;
