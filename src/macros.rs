// Copyright 2015 MaidSafe.net limited
//
// This MaidSafe Software is licensed to you under (1) the MaidSafe.net Commercial License, version
// 1.0 or later, or (2) The General Public License (GPL), version 3, depending on which licence you
// accepted on initial access to the Software (the "Licences").
//
// By contributing code to the MaidSafe Software, or to this project generally, you agree to be
// bound by the terms of the MaidSafe Contributor Agreement, version 1.0, found in the root
// directory of this project at LICENSE, COPYING and CONTRIBUTOR respectively and also available at
// http://maidsafe.net/licenses
//
// Unless required by applicable law or agreed to in writing, the MaidSafe Software distributed
// under the GPL Licence is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.
//
// See the Licences for the specific language governing permissions and limitations relating to use
// of the MaidSafe Software.

#![macro_use]

/// Convert a container of `u8`s to an array.  If the container is not the exact size specified,
/// `None` is returned.  Otherwise, all of the elements are moved into the array.
///
/// ```
/// let mut data = Vec::<u8>::new();
/// data.push(1);
/// data.push(2);
/// assert!(container_of_u8_to_array!(data, 2).is_some());
/// assert!(container_of_u8_to_array!(data, 3).is_none());
/// ```
#[macro_export]
macro_rules! container_of_u8_to_array {
    ($container:ident, $size:expr) => {{
        if $container.len() != $size {
            None
        } else {
            let mut arr = [0u8; $size];
            for element in $container.into_iter().enumerate() {
                arr[element.0] = element.1;
            }
            Some(arr)
        }
    }};
}
