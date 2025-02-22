/**
 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * @fileoverview Ensures elements with an ARIA role are contained by their required parents.
 * e.g. A child node with role="listitem" should be contained by a parent with role="list".
 * See base class in axe-audit.js for audit() implementation.
 */

const AxeAudit = require('./axe-audit.js');
const i18n = require('../../lib/i18n/i18n.js');

const UIStrings = {
  /** Title of an accesibility audit that evaluates valid aria-role usage. Some ARIA roles require that elements must be a child of specific parent element. This audit checks that when those roles are used, the element with the role is in fact a child of the required parent. This title is descriptive of the successful state and is shown to users when no user action is required. */
  title: '`[role]`s are contained by their required parent element',
  /** Title of an accesibility audit that evaluates valid aria-role usage. Some ARIA roles require that elements must be a child of specific parent element. This audit checks that when those roles are used, the element with the role is in fact a child of the required parent. This title is descriptive of the failing state and is shown to users when there is a failure that needs to be addressed. */
  failureTitle: '`[role]`s are not contained by their required parent element',
  /** Description of a Lighthouse audit that tells the user *why* they should try to pass. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  description: 'Some ARIA child roles must be contained by specific parent roles to ' +
      'properly perform their intended accessibility functions. ' +
      '[Learn more](https://dequeuniversity.com/rules/axe/4.4/aria-required-parent).',
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

class AriaRequiredParent extends AxeAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'aria-required-parent',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      requiredArtifacts: ['Accessibility'],
    };
  }
}

module.exports = AriaRequiredParent;
module.exports.UIStrings = UIStrings;
