import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import БанкEnum from '../enums/i-i-s-novyjj-2-банк';

export default FlexberryEnum.extend({
  enum: БанкEnum,
  sourceType: 'IIS.Novyjj_2.Банк'
});
