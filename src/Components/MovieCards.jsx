import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
const MovieCards = (props) => {
    return (

        <Card
            className={props.feature ? 'bestMovies' : ''}
            hoverable
            style={{
                marginBottom: 20,
                marginTop: 20
            }} cover={<img className='img_wrapper'   alt="example" src={props.Poster} />}>
            {
                props.feature ? <div className='bestMovie-tag'>
                    <span>Best Movie</span>
                </div> : <></>
            }

            <Meta title={props.Title} description={props.Year} />
        </Card>

    )
}

export default MovieCards