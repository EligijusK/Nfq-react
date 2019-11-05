import React from 'react';
import Card from './Card';
import Button from './Button'
import axios from 'axios';
import { endpoints, getImageUrl } from '../config'

class App extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            list: [],
            genres: [],
            genreId: 28,
        };
    }

    setStateGenreId(id)
    {
        this.setState({
            genreId: id
        })
        this.componentDidMount();
    }


    componentDidMount() {
        const { genreId } = this.state;

        const requestGenres = axios
            .get(endpoints.genres())
            .then((data) => {

                this.setState({
                    genres: data.data.genres
                });
            });

        const requestMoviesById = axios
            .get(endpoints.genreMovies(this.state.genreId))
            .then((data) => {

                this.setState({
                    list: data.data.results
                });
            });

    }

    render() {
        return (
            <div>
                {this.state.genres.map((button) => (
                    <Button changeHandler={this.setStateGenreId.bind(this)}
                            key={button.id}
                            id={button.id}
                            genre={button.name}
                    />
                ))}

                {this.state.list.map((card) => (
                    <Card
                        key={card.original_title}
                        backgroundImage={getImageUrl(card.backdrop_path)}
                        date={card.release_date}
                        rating={card.vote_average}
                        votes={card.vote_count}
                        description={card.overview}
                        title={card.original_title}
                    />
                ))}
            </div>
        );
    }
}

export default App;

