import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
const MovieCards = (props) => {
    return (
        <Card
            hoverable
            style={{
                marginBottom: 20,
                marginTop: 20
            }}

            cover={<img alt="example" src={props.Poster} />}
        >
            <Meta className='discription' title={props.Title} description={props.Year} />
        </Card>
    )
}

export default MovieCards