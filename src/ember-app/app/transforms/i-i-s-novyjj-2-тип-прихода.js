import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипПриходаEnum from '../enums/i-i-s-novyjj-2-тип-прихода';

export default FlexberryEnum.extend({
  enum: ТипПриходаEnum,
  sourceType: 'IIS.Novyjj_2.ТипПрихода'
});
