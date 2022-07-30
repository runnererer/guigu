//将四个模块请求的接口函数统一暴露
import * as trademark from './product/tradeMark';
import * as spu from './product/spu';
import * as sku from './product/sku';
import * as attr from './product/attr';

//对外暴露
export default {
    trademark,
    spu,
    sku,
    attr
}