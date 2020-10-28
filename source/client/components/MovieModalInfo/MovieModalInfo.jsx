import React from 'react';
import { Modal } from 'antd';

const MovieModalInfo = (props) => {

    return (
        <>
            <Modal
                title={ props.movieItem && props.movieItem.title }
                visible={ props.visible }
                onOk={ props.handleHideInfo }
                onCancel={ props.handleHideInfo }
                closable={false}
            >
                <p>Release: { props.movieItem && props.movieItem.release }</p>
                <p>Format: { props.movieItem && props.movieItem.format }</p>
                <p>Stars: { props.movieItem && props.movieItem.stars }</p>
            </Modal>
        </>
    );
}

export default MovieModalInfo;
