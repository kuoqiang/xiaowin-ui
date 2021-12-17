/*
 * @Descripttion: Bernard
 * @Author: xiaowin
 * @Date: 2021-12-15 17:20:55
 * @LastEditors: guoqiang
 * @LastEditTime: 2021-12-16 15:20:26
 * @Copyright:  ©云粒智慧科技有限公司 All rights reserved
 */

import React, { FC, useState, useEffect } from 'react';
import './index.scss';

interface Props {
  src: string;
  loadingSrc: string;
  width: number;
  height: number;
  error: string;
  onError: Function;
}

const cache: any = {};

const reload = (src: string) =>
  new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });

const Image: FC<Props> = ({
  src = '',
  loadingSrc = '',
  error,
  width,
  height,
  onError = () => {},
}: Props) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!cache[src]) {
      cache[src] = reload(src);
    }
    cache[src]
      .then(() => {
        setLoading(false);
        console.log('加载成功');
      })
      .catch((err: any) => {
        console.log(err);
        setImgSrc(error);
        setLoading(false);
        onError(err);
      });
  }, [src]);

  return <img width={width} height={height} src={imgSrc}></img>;
};

export default Image;
