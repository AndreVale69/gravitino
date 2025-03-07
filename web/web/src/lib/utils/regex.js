/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

export const nameRegex = /^\w[\w/=-]{0,63}$/

export const nameRegexDesc =
  'This field must start with a letter, digit, or underscore, can include alphanumeric characters, underscores, slashes (/), equal signs (=), or hyphens (-), and must be between 1 and 64 characters long.'

export const keyRegex = /^[a-zA-Z_][a-zA-Z0-9-_.]*$/
