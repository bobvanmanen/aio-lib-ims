/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/** @private */
function configMissingKeys (configData) {
  throw new Error('I am a bad ims plugin')
}

const canSupportSync = (configData) => configMissingKeys(configData).length === 0

/** @private */
async function canSupport (configData) {
  const missingKeys = configMissingKeys(configData)
  if (missingKeys.length === 0) {
    return Promise.resolve(true)
  } else {
    return Promise.reject(new Error(`Not supported due to some missing properties: ${missingKeys}`))
  }
}

/** @private */
async function imsLogin (ims, config) {
  return canSupport(config)
}

module.exports = {
  supports: canSupportSync,
  imsLogin
}
