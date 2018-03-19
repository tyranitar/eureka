import React from 'react';
import PropTypes from 'prop-types';

import { GridList, GridTile } from 'material-ui/GridList';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
};

const VideoList = ({
    videos,
    videoWidth,
    videoHeight,
}) => (
    <div style={ styles.root }>
        <GridList style={ styles.gridList } cellHeight="auto" cols={ 1 }>
            { videos.map((video, idx) => (
                <GridTile key={ idx }>
                    <iframe title={ idx } width={ `${ videoWidth }` } height={ `${ videoHeight }` } src={ video.src } frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
                </GridTile>
            )) }
        </GridList>
    </div>
);

VideoList.propTypes = {
    videos: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
    })).isRequired,
    videoWidth: PropTypes.number,
    videoHeight: PropTypes.number,
};

VideoList.defaultProps = {
    videoWidth: 324,
    videoHeight: 200,
};

export default VideoList;