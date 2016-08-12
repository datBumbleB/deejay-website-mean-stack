/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Equipment = require('../api/equipment/equipment.model');
var Pic = require('../api/pic/pic.model');
var Email = require('../api/email/email.model');
var User = require('../api/user/user.model');
 var Social = require('../api/social/social.model');

Equipment.find({}).remove(function() {
  Equipment.create({
    name : 'BEHRINGER B212D',
    info : 'buybyubuybu The Behringer EUROLIVE speaker lineup is quite a versatile bunch.  With over 20 speaker models and setups to choose from, its hard to know where to start.  Behringer decided to send us a set that DJ’s and performers would use to bump their gigs and routines.  Introducing the Behringer B212D two-way 12-inch powered speaker system.  These speakers are very compact and lightweight and perfect for mobile DJ’s on the go.  They also would benefit DJ’s on a budget or those living in tight spaces as these speakers can fit almost anywhere.  Check out my Full-HD video review after the jump.',
    position : 'Stânga',
    image : 'http://static.djbooth.net/pics-equip/b212d.jpg'
  }, {
    name : 'XENYX X1204USB',
    info : 'The compact X1204USB mixer allows you to effortlessly achieve premium-quality sound, thanks to 4 onboard studio-grade XENYX Mic Preamps and ultra-musical “British” channel EQs. And our easy-to-use “one-knob” compressors provide total dynamic control for the ultimate in punch and clarity, while respecting all the power and emotion you pack into every note. Add to this our 24-bit, dual engine Multi-FX processor with 16 editable, professional-grade presets including reverb, chorus, flanger, delay, pitch shifter and multi-effects – and the X1204USB becomes an incredibly versatile mixer for your live performances.',
    position : 'Dreapta',
    image : 'http://origin.behringer.com/assets/X1204USB_P0A0H_Right_XXL.png'
  }, {
    name : 'B-CONTROL DJ BCD3000',
    info : 'Behringer’s first attempt at a DJ controller, the BCD2000, didn’t generate the hype that some of their other B-Control controllers have. The company didn’t waste any time coming out with an update, though, and was showing the B-CONTROL DJ BCD3000 software controller at the Winter NAMM show. Based on the brief glimpse we got at NAMM, it looks like the new dj controller addresses most of the limits of the earlier controller. The B-CONTROL DJ BCD3000 features a 4-channel audio interface, Traktor DJ software, phono-preamps and even a mic preamp for voice-overs.',
    position : 'Stânga',
    image : 'http://i0.wp.com/www.synthtopia.com/wp-content/uploads/2007/01/behringer-bcd-3000-dj-controller.jpg?w=640'
  }, {
    name : 'Sennheiser HD 598',
    info : 'The HD 598 offers unrivaled performance and value. They draw on decades of Sennheiser engineering expertise to ensure the sound quality, reliability and durability and audio industry professional trust. Crafted with precision using premium materials, they exude luxury and quality while delivering exceptional sound quality. Sennheiser‘s innovative E.A.R. technology is featured in the HD 598. This positions the transducers inside the ear cups to channel audio signals directly into your ears producing a more realistic, spatial listening experience. The transducers employ a special diaphragm geometry that minimizes intermodulation and harmonic distortion while delivering high output and impressive frequency response.',
    position : 'Dreapta',
    image : 'http://g-ecx.images-amazon.com/images/G/01/aplusautomation/vendorimages/e3301c32-983a-441b-a0ba-3fbda5f8b718._CB320294244_.jpg'
  }, {
    name : 'eqDescription',
    info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo lorem vel lorem rutrum iaculis sed in quam. Sed sit amet ullamcorper ipsum. Morbi sagittis eu eros quis aliquet. Donec euismod est justo, id congue lectus sodales ac. Morbi et pellentesque sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eget faucibus ligula. Ut at metus vehicula, faucibus nisi a, vehicula lorem. Donec consectetur vestibulum lectus, nec aliquet dui suscipit non. Cras libero leo, varius eget libero eget, efficitur tincidunt eros. Nulla nunc leo, lobortis a lectus sed, condimentum porttitor eros. Mauris tincidunt augue eget ipsum egestas vestibulum. Quisque sem nisi, condimentum vitae diam a, tincidunt rutrum eros. Sed sollicitudin semper velit et blandit. Etiam lorem quam, aliquam nec ante laoreet, mollis egestas dui.',
    position : 'Dreapta',
    image : 'http://g-ecx.images-amazon.com/images/G/01/aplusautomation/vendorimages/e3301c32-983a-441b-a0ba-3fbda5f8b718._CB320294244_.jpg'
  });
});

Email.find({}).remove(function() {
  Email.create({
    senderEmail : 'adrianmpanainte@gmail.com',
    emailBody : 'Hello, and welcome to this platform! You have installed and configurated it correctly!',
    senderName : 'Adrian Mihai Panainte'
  });
});

Social.find({}).remove(function() {
  Social.create({
    name : 'Phone',
    info : '0773.944.934'
  },
  {
    name : 'Facebook',
    info : 'http://www.facebook.com/panainte.dan/'
  },
  {
    name : 'Email',
    info : 'panadan69@yahoo.com'
  },
  {
    name : 'Google Plus',
    info : 'http://plus.google.com/panainte.dan/'
  });
});

Pic.find({}).remove(function() {
  Pic.create({
    name : 'Lorem ipsum dolor sit amet',
    link : 'http://www.digitaldjtips.com/wp-content/uploads/2013/06/CMD-STUDIO-4A_P0809_Top-Front_XXL.png'
  },{
    name : 'Putent comprehensam',
    link : 'http://previews.123rf.com/images/STAB/STAB1409/STAB140900006/31982267-Fun-party-disco-background-Stock-Photo.jpg'
  },{
    name : 'Pro case nostrum eu. Id per probo bonorum',
    link : 'https://www.saproto.nl/wordpress/wp-content/uploads/2015/04/Party-11.jpg'
  },{
    name : ' Agam percipit praesent duo te',
    link : 'http://www.bluebirddoula.com/wp-content/uploads/2015/08/Blog-15-Party.jpg'
  },{
    name : ' Comprehensam no denique democritum persequeris eam',
    link : 'https://upload.wikimedia.org/wikipedia/commons/c/cb/BackyardParty.jpg'
  },{
    name : ' Agam percipit praesent duo te',
    link : 'http://newflowerwallpaper.com/download/flower-images-to-color-and-wallpapers/flower-images-to-color-and-wallpapers-16.jpg'
  },{
    name : 'Suscipit indoctum imperdiet an has',
    link : 'http://www.gettyimages.com/gi-resources/images/Editorial-Images/Archive.jpg'
  },{
    name : 'Quod epicuri ad eum, vel at commune elaboraret',
    link : 'http://www.planwallpaper.com/static/images/Frozen-Logo-Symbol-HD-Images.jpg'
  },{
    name : 'Ei usu brute altera insolens',
    link : 'http://i.telegraph.co.uk/multimedia/archive/03204/Jennifer-in-Paradi_3204219n.jpg'
  },{
    name : 'Antiopam adolescens duo eu, cu ius copiosae ',
    link : 'https://amazingcarousel.com/wp-content/uploads/amazingcarousel/2/images/lightbox/golden-wheat-field-lightbox.jpg'
  },{
    name : 'Wallpaper',
    link : 'https://s14.postimg.org/4lkuq1rht/djset1.jpg'
  },{
    name : 'Logo',
    link : 'https://imgh.us/Deejay_1.svg'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: '0s5e1p96.9@secbvq.bhr',
    password: 'pq0.85!648T8ab@>'
  }, function() {
      console.log('finished populating users');
    }
  );
});
