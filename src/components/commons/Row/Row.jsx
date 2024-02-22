import cx from 'classnames';
import { memo } from 'react';

import Picture from '../Picture';

import s from './Row.module.scss';

const Row = ({ className, pictures,isSmallGap, isSmallImages}) => {
    return (
    <div className={cx(className ,s.root, {[s.smallGap]: isSmallGap})}>
        {pictures.map(el => <Picture hidden={el.hidden} key={el.id} alt={`picture ${el.id}`} url={el.url} isLarge={!isSmallImages}/>)}
    </div>
    )
};

export default memo(Row);