import EnumMessageType from '../../models/enums/enumMessageType';
import { ElMessageBox } from 'element-plus';
import { t } from '@/i18n';

const confirm = async (type: EnumMessageType, callback: () => void, content = t('are_you_sure')) => {
  ElMessageBox.confirm( content, {
    dangerouslyUseHTMLString: true,
    confirmButtonText: ( 'បាត/ចាស៎' ),
    type,
    showCancelButton: false,
    beforeClose: async ( action, instance, done ) => {
      if ( action === 'confirm' ) {
        instance.confirmButtonLoading = true;
        await callback();
        instance.confirmButtonLoading = false;
        done();
      } else {
        done();
      }
    },
  } );
};

export default confirm;
