/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {WysiwygInterface} from "./wysiwyg-interface";

export interface WysiwygComponentInitializerInterface {
    initializeComponent(wysiwyg: WysiwygInterface): void;
}

export interface WysiwygConfigInitializerInterface {
    initializeConfig(contentTypeId: string, config: any): void;
}
