import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.image_wrapper}>
                <img src="https://coverfiles.alphacoders.com/549/54977.jpg" alt=""/>
            </div>
            <div className={s.description_block}>
                <div className={s.profile_photo}>
                    <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200" alt=""/>
                </div>
                <div className={s.profile_short_info}>
                    <p className={s.name}>Zosterops lateralis</p>
                    <p className={s.where_from}>The Great Barrier Reef, Australia</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;