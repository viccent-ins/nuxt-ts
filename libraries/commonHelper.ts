import { format } from 'date-fns';
import { ref } from 'vue';
import _ from 'lodash-es';
import notificationHelper from './elementUiHelpers/notificationHelper';
import EnumMessageType from '../models/enums/enumMessageType';
// import { t } from '@/i18n';

const uploadSlipImageFRef = ref<UploadInstance>();
const slipUpload = ref([] as File[]);
const compressImageSize = async (image: File) => {
  slipUpload.value[0] = image;
  const imageSize = image.size;
  const maxSizeToCompress = 1000000;
  if (imageSize > maxSizeToCompress) {
    const img = new Image();
    img.src = window.URL.createObjectURL(image);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        const compressedImage = new File([blob ?? ''], image.name, { type: image.type });
        const container = new DataTransfer();
        container.items.add(compressedImage);
        const file = container.files[0];
        slipUpload.value[0] = file;
      }, 'image/jpeg', 1);
    };
  }
};
// eslint-disable-next-line
const getFile = (file: File) : void => {
  if (file) {
    compressImageSize(file);
  }
};
const imageName = ref('');
const handleSlipImageExceed: UploadProps['onExceed'] = (files) => {
  uploadSlipImageFRef.value?.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  uploadSlipImageFRef.value?.handleStart(file);
};
const isdisabled = ref(false);
const getSlipImage: UploadProps['onChange'] = async (file) => {
  isdisabled.value = true;
  const acceptFileType = ['image/png', 'image/jpeg', 'image/jpg'];
  imageName.value = (file.name).split('.').slice(0, -1).join('.');
  const currentFileType = file.raw?.type ?? '';
  if (acceptFileType.includes(currentFileType)) {
    await getFile(file.raw as File);
  } else {
    slipUpload.value = [];
    uploadSlipImageFRef.value?.clearFiles();
  }
  isdisabled.value = false;
};
const removeSlipImage: UploadProps['onRemove'] = () => {
  slipUpload.value = [];
};
const getAssetImage = (locaction: string) => `${process.env.VUE_APP_ASSET_IMAGE_CDN}/${locaction}`;
interface IDateRange {
  startDate: string | Date,
  endDate: string | Date,
}
const getDateRange = (shortcutDate: string, dateFormat = 'yyyy/MM/dd'): IDateRange => {
  const startDate = new Date();
  const endDate = new Date();
  let previousStateDateRange = 0;
  let previousEndDateRange = 0;
  switch (shortcutDate) {
    case 'yesterday': {
      previousStateDateRange = 1;
      previousEndDateRange = 1;
      break;
    }
    case 'past3days': {
      previousStateDateRange = 3;
      previousEndDateRange = 0;
      break;
    }
    case 'past7days': {
      previousStateDateRange = 7;
      previousEndDateRange = 0;
      break;
    }
    default: {
      previousStateDateRange = 0;
      previousEndDateRange = 0;
      break;
    }
  }
  startDate.setDate(startDate.getDate() - previousStateDateRange);
  endDate.setDate(endDate.getDate() - previousEndDateRange);
  return {
    startDate: format(startDate, dateFormat),
    endDate: format(endDate, dateFormat),
  };
};

const copyTextToClipBoard = (text : string, showNotification = true) : void => {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (showNotification) {
    notificationHelper.notification(`${t('copied')}: ${text}`, EnumMessageType.Info);
  }
};
// eslint-disable-next-line
const isRequiredField = (settings: any, propertyName: string) => {
  const setting = _.pickBy(settings, (__, key) => key === propertyName);
  return _.find(setting, { PropertyStatus: 'Required' }) !== undefined;
};
interface ITemplate {
  isMobile: boolean,
  template: string,
}
const getTemplate = (): ITemplate => {
  const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Mobile|IEMobile|Opera Mini/i.test(navigator.userAgent));
  const template = isMobile ? 'mobile' : 'desktop';
  return {
    isMobile,
    template,
  };
};
const getGameCategoryByTab = (tab: string): number => {
  const categories: Record<string, number> = {
    SportInitial: 1,
    LiveCasinoInitial: 2,
    HomeInitial: 3,
    GameInitial: 3,
    KenoInitial: 3,
    CockfightInitial: 3,
    VirtualSportInitial: 4,
  };
  return categories[tab];
};

const handlePopupNewWindow = (segment: string, width: number, height: number): void => {
  const position = {
    // eslint-disable-next-line no-restricted-globals
    x: (screen.width / 2) - (width / 2),
    // eslint-disable-next-line no-restricted-globals
    y: (screen.height / 2) - (height / 2),
  };
  const url = `${window.location.origin}/v2/${segment}`;
  window.open(url, 'NewWindowInitial', `width=${width},height=${height},left=${position.x},top=${position.y}`);
};

const handleImportImage = (themeName = '', path = ''): string => {
  const {
    template,
  } = getTemplate();
  try {
    return getAssetImage(`assets/theme/${themeName}/${template}/images/${path}`);
  } catch (e) {
    return getAssetImage('assets/theme/common/icon/no-image.png');
  }
};

const handleImportCommonImage = (path = ''): string => {
  try {
    return getAssetImage(`assets/theme/common/${path}`);
  } catch (e) {
    return getAssetImage('assets/theme/common/icon/no-image.png');
  }
};

const getSportBsiIframeDomain = (): string => {
  let domain = '';
  if (process.env.NODE_ENV === 'demo') {
    domain = 'https://sports-bsi-demo.568win.com';
  } else {
    domain = 'https://sports-bsi.sswwkk.com';
  }
  return domain;
};
const getUserAgent = () => navigator.userAgent;
export default {
  slipUpload,
  getFile,
  uploadSlipImageFRef,
  handleSlipImageExceed,
  getSlipImage,
  removeSlipImage,
  getDateRange,
  copyTextToClipBoard,
  isRequiredField,
  getTemplate,
  getGameCategoryByTab,
  isdisabled,
  handlePopupNewWindow,
  handleImportImage,
  handleImportCommonImage,
  getSportBsiIframeDomain,
  getUserAgent,
  getAssetImage,
  imageName,
};
