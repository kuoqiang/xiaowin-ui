/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-12-15 17:20:55
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-31 16:55:03
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

import React, { FC, useState, useEffect, useRef } from 'react';
import './index.scss';
import classnames from 'classnames';
import uuid from 'react-uuid';

interface Props {
  src: string;
  loadingSrc: string;
  width: number;
  height: number;
  error: string;
  onError: Function;
  mask: string;
}

const cache: any = {};

const reload = (src: string) =>
  new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });

const Image: FC<Props> = (prop: Props) => {
  const [imgSrc, setImgSrc] = useState(prop.src);
  const [loading, setLoading] = useState(true);
  const [uid, setuid] = useState(uuid());
  const imgRef = useRef();

  let classNames = classnames({
    'xiaowin-Image': true,
    'xiaowin-Image_mask': prop.mask,
  });

  let options = {
    onError: () => {},
    ...prop,
  };

  prop.src && delete options.src;
  prop.onError && delete options.onError;

  useEffect(() => {
    if (prop.mask) {
      let innerDom = document.getElementById(uid);
    }

    if (!cache[prop.src]) {
      cache[prop.src] = reload(prop.src);
    }
    cache[prop.src]
      .then(() => {
        setLoading(false);
        console.log('加载成功');
      })
      .catch((err: any) => {
        console.log(err);
        setImgSrc(prop.error);
        setLoading(false);
        options.onError(err);
      });
  }, [prop.src]);
  if (prop.mask) {
    let wrapperStyle = {
      width: prop.width,
      height: prop.height,
      backgroundImage: `url(${prop.src}) `,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    let innerStyle = {
      width: '100%',
      height: '100%',
      background: 'url(' + prop.mask + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      WebkitMaskImage: `linear- gradient(110deg, #000 10 %, transparent 70 %, transparent)`,
    };
    return (
      <div id={uid} style={wrapperStyle}>
        <div className="xiaowin-mask" style={innerStyle}></div>
      </div>
    );
  } else {
    return <img className={classNames} {...options} src={imgSrc}></img>;
  }
};

export default Image;
