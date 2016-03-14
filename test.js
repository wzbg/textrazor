/* 
* @Author: zyc
* @Date:   2016-02-18 14:39:14
* @Last Modified by:   zyc
* @Last Modified time: 2016-03-14 18:02:31
*/
'use strict'

const TextRazor = require('./index')

const textRazor = new TextRazor('<YOUR API KEY>')

// const content = 'The Federal Reserve is the enemy of Ron Paul.'
const content = `Apple order: White House says San Bernardino request is limited
17 February 2016
 From the section US & Canada
A man tests a mobile phone, an iPhone 6 by Apple in a shop in Munich, Germany, 27 January 2016.Image copyrightReuters
The White House says a court ruling asking Apple to help the FBI access data on a phone belonging to the San Bernardino gunman does not mean asking for a "back door" to the device.
Spokesman Josh Earnest said the FBI was asking for access to a single device.
Republican frontrunner Donald Trump slammed Apple for contesting the court order, saying "we should open it up".
Apple chief Tim Cook says circumventing security software on the iPhone risks the security of all its customers.
In a statement, he said the court order was "an unprecedented step which threatens the security of our customers" that "has implications far beyond the legal case at hand".
The court had ordered the technology company to alter Farook's iPhone so that the FBI could make unlimited attempts at the passcode without the risk of erasing the data - Apple has provided default encryption on its devices since 2014, allowing only users with knowledge of the passcode to access its contents.
'One device'
It also wants Apple to develop a way to help speed up investigators trying different passcode combinations to gain access.
White House spokesman Josh Earnest said the FBI request for access did not mean they were asking for a "back door" - or unauthorised access - into the company's device or for it to be redesigned.
"They are simply asking for something that would have an impact on this one device," he told reporters on Wednesday.
Jump media playerMedia player helpOut of media player. Press enter to return or tab to continue.
Media captionEXPLAINER: What is encryption?
Presidential candidates on both sides - Democrat and Republican - have yet to weigh in on the latest development, but most have been supportive of the FBI stance in the past.
"I agree 100% with the courts...Who do they think they are? They have to open it up," Donald Trump told Fox news on Wednesday, referring to Apple's decision to fight a court order to help the FBI unlock Syed Rizwan Farook's iPhone, which had been encrypted.
"I think security, overall, we have to open it up and we have to use our heads. We have to use common sense," he added.
Republican presidential candidate Donald Trump speaks on stage during a campaign event on 16 February 2016 in Beaufort, South CarolinaImage copyrightGetty Images
Image caption
Republican Donald Trump voiced his support for the court ruling on Wednesday
Florida Senator Marco Rubio, who like Mr Trump is seeking the Republican nomination for president, described it as a "tough issue" that requires the technology industry to work closer with the government to reach a solution.
"Ultimately, I think being a good corporate citizen is important," he said, during a campaign stop in South Carolina ahead of the Republican presidential primary there on Saturday.
'Out of criminals' hands'
Democratic hopeful Hillary Clinton has previously called for a "Manhattan-like Project" to address the issue of encryption, in reference to top-secret efforts by the US in developing nuclear weapons during World War Two.
She said in December she hoped law enforcement agencies would work together in partnership with technology companies to provide access to encrypted technology used by terrorists.
FBI director James Comey has been critical of Google and Apple in recent months for creating new encryption technology that allows "terrorists to go dark".
Hillary Clinton speaking in New York on 16 February 2016Image copyrightAP
Image caption
Hillary Clinton has spoken out in support of greater cooperation between the FBI and technology companies in recent months
But Jonathan Godfrey, vice president of the App Association which represents companies in the mobile app community, highlights the importance of maintaining "the strongest security to keep our most sensitive, private data safe" as smartphone and tablet consumers increasingly expect access to their most important data through the cloud.
"The FBI's demands would substantially undermine our best means of keeping critical data out of the hands of criminals and bad actors," he told BBC News.
The question is not so clear cut according to Daniel Castro, vice-president of the non-partisan think tank Information Technology and Innovation Foundation. He suggests there are some cases where "it would be prudent to allow law enforcement to have this access - at least in the short term".
However, he says the short term benefits of doing this need to be weighed up against any harmful unintended consequences.
Apple's Tim Cook said on Wednesday the FBI's demands set "a dangerous precedent".
"The FBI wants us to make a new version of the iPhone operating system, circumventing several important security features, and install it on an iPhone recovered during the investigation."`

textRazor.exec(content, { languageOverride: 'eng' })
  .then(res => console.log(JSON.stringify(res)))
  .catch(err => console.error(err))

console.log(textRazor.apiKey)