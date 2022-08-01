function init() {
	// converts all div IDs to vars lol
	var width = 728;
	var height = 90;
	var outdis = width+50;
	var indis = width+50;
	var mainTL;
	var atEndframe = false;
	
    // 4 creative versions: disneyplus_offer, disneyplus__no_offer, peacock_offer, peacock__no_offer
	var creative = myFT.instantAds.creative.toLowerCase();

	IDsToVars();

	// POPULATE IMAGES
	insertImage(logo, myFT.instantAds.logo, myFT.instantAds.logo_style, true);
	insertImage(f1_device, myFT.instantAds.f1_device, myFT.instantAds.f1_device_style, true);
	insertImage(f2_device, myFT.instantAds.f2_device, myFT.instantAds.f2_device_style, true);
	insertImage(f3_tv_d, myFT.instantAds.f3_tv_d, myFT.instantAds.f3_tv_d_style, true);
	insertImage(f3_screen_d, myFT.instantAds.f3_screen_d, myFT.instantAds.f3_screen_d_style, true);
	insertImage(f3_tv_p, myFT.instantAds.f3_tv_p, myFT.instantAds.f3_tv_p_style, true);
	insertImage(f3_screen_p, myFT.instantAds.f3_screen_p, myFT.instantAds.f3_screen_p_style, true);
	insertImage(f4_screen_p, myFT.instantAds.f4_screen_p, myFT.instantAds.f4_screen_p_style, true);
	insertImage(f3_device, myFT.instantAds.f3_device, myFT.instantAds.f3_device_style, true);
	insertImage(offer_bolton_image, myFT.instantAds.offer_bolton_image, myFT.instantAds.offer_bolton_image_style, true);
	insertImage(no_offer_bolton_image, myFT.instantAds.no_offer_bolton_image, myFT.instantAds.no_offer_bolton_image_style , true);

	// POPULATE COPY( and their styling if declared in manifest.js )
	insertCopy(f1_bg_d, myFT.instantAds.f1_bg_d, myFT.instantAds.f1_bg_d_style);
	insertCopy(f1_bg_p, myFT.instantAds.f1_bg_d, myFT.instantAds.f1_bg_p_style);
	insertCopy(f2_bg_d, myFT.instantAds.f2_bg_d, myFT.instantAds.f2_bg_d_style);
	insertCopy(f2_bg_p, myFT.instantAds.f2_bg_d, myFT.instantAds.f2_bg_p_style);
	insertCopy(f3_bg_d, myFT.instantAds.f3_bg_d, myFT.instantAds.f3_bg_d_style);
	insertCopy(f3_bg_p, myFT.instantAds.f3_bg_p, myFT.instantAds.f3_bg_p_style);
	insertCopy(f4_bg_p, myFT.instantAds.f4_bg_p, myFT.instantAds.f4_bg_p_style);
	insertCopy(endframe_bg_d, myFT.instantAds.endframe_bg_d, myFT.instantAds.endframe_bg_d_style);
	insertCopy(endframe_bg_p, myFT.instantAds.endframe_bg_d, myFT.instantAds.endframe_bg_p_style);
	insertCopy(f1_copya, myFT.instantAds.f1_copya, myFT.instantAds.f1_copya_style);
	insertCopy(f1_copyb, myFT.instantAds.f1_copyb, myFT.instantAds.f1_copyb_style);
	insertCopy(f2_copya, myFT.instantAds.f2_copya, myFT.instantAds.f2_copya_style);
	insertCopy(f2_copyb, myFT.instantAds.f2_copyb, myFT.instantAds.f2_copyb_style);
	insertCopy(f3_copy, myFT.instantAds.f3_copy, myFT.instantAds.f3_copy_style);
	insertCopy(f4_copy, myFT.instantAds.f4_copy, myFT.instantAds.f4_copy_style);
	insertCopy(offer_copy, myFT.instantAds.offer_copy, myFT.instantAds.offer_copy_style);
	insertCopy(offer_title, myFT.instantAds.offer_title, myFT.instantAds.offer_title_style);
	insertCopy(offer_dollarSign, myFT.instantAds.offer_dollarSign, myFT.instantAds.offer_dollarSign_style);
	insertCopy(offer_price, myFT.instantAds.offer_price, myFT.instantAds.offer_price_style);
	insertCopy(offer_cents, myFT.instantAds.offer_cents, myFT.instantAds.offer_cents_style);
	insertCopy(offer_terms, myFT.instantAds.offer_terms, myFT.instantAds.offer_terms_style);
	insertCopy(offer_agree, myFT.instantAds.offer_agree, myFT.instantAds.offer_agree_style);
	insertCopy(offer_legal, myFT.instantAds.offer_legal, myFT.instantAds.offer_legal_style);
	insertCopy(offer_sideBar, myFT.instantAds.offer_sideBar, myFT.instantAds.offer_sideBar_style);
	insertCopy(offer_bolton_copy, myFT.instantAds.offer_bolton_copy, myFT.instantAds.offer_bolton_copy_style);
	insertCopy(no_offer_copy, myFT.instantAds.no_offer_copy, myFT.instantAds.no_offer_copy_style);

	insertCopy(disclaimer, myFT.instantAds.disclaimer, myFT.instantAds.disclaimer_style);
	
	insertCopy(offer_ctaCopy, myFT.instantAds.offer_ctaCopy, myFT.instantAds.offer_ctaCopy_style);
	insertCopy(no_offer_ctaCopy, myFT.instantAds.no_offer_ctaCopy, myFT.instantAds.no_offer_ctaCopy_style);

    //setup Mask
    setupMask();

    wrapper.className = 'show';
    initClickTag();

    myFT.on("load", function(){
    	initAnimation();
    	startAnimation();
		fireReportingEvent();
    	
    });

    function initAnimation() {

    	mainTL = new TimelineMax( {
    		delay:.2,
    		onComplete: onAnimationComplete
    	} );

    	mainTL.pause();

    	if (creative === 'disneyplus_offer') {
    		build_timelines_Disneyplus_offer()
    	}

    	if ( creative === 'disneyplus_no_offer') {
            build_timelines_Disneyplus_no_offer()
    	}

    	if (creative === 'peacock_offer') {
    		build_timelines_Peacock_offer();
    	}

    	if (creative === 'peacock_no_offer') {
    		build_timelines_Peacock_no_offer();
    	}

    	if (creative === 'peacock_offer_modifiedtiming') {
    		build_timelines_Peacock_offer_modifiedtiming();
    	}

    };

    function build_timelines_Disneyplus_offer() {

	    //// MAIN ANIMATION
	    mainTL	   
		//fr1
		.add("fr1")
		//.call(function(){console.log("Disneyplus_offer");})
		.set([f2_bg_d, f3_bg_d, endframe_bg_d], {x:width})
		.set([f2_bg_p, f3_bg_p, f4_bg_p, endframe_bg_p], {x:width})
		.set([f1_device, f2_device, f3_tvset_p], {y:height})
		.set([f1_device, f2_device, f3_device, offer_bolton_image, no_offer_bolton_image], {y:height})
		.set([f3_tvset_d, f3_tvset_p], {y:height})
		.to(frame1, 0, {opacity:1}, "fr1+=0")
		.to(".bgs_d", 0, {opacity:1}, "fr1+=0")
		.to(".devices", 0, {opacity:1}, "fr1+=0")
		.to(f1_bg_d, .1, {opacity:1, ease:Cubic.easeInOut}, "fr1+=0")
		.fromTo(f1_copya, 0.5, {opacity:0, x:15},{opacity:1, x:0, ease:"Cubic.easeInOut"}, "fr1+=0.25")
		.fromTo(f1_copyb, 0.5, {opacity:0, y:30},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "fr1+=0.75")
		.fromTo(f1_device, 0.75, {opacity:1},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr1+=0.75")
		//fr2
		.add("fr2", "+=2") 
		.to(frame2, 0, {opacity:1}, "fr2+=0")
		.to(f1_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr2+=0")
		.to(f2_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr2+=0")
		.to([f1_copya, f1_copyb_mask], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr2+=0")
		.fromTo(f2_copya, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr2+=0.35")
		.fromTo(f2_copyb, 0.5, {opacity:0, y:30},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "fr2+=0.9")
		.fromTo(f2_device, 0.75, {opacity:1},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr2+=0.9")
		//fr3
		.add("fr3", "+=2") 
		.to(frame3, 0, {opacity:1}, "fr3+=0")
		.to(f2_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr3+=0")
		.to(f3_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr3+=0")
		.to([f2_copya, f2_copyb_mask, f1_device, f2_device], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr3+=0")
		.fromTo(f3_copy, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr3+=0.35")
		.to([f3_tv_d, tv_screen_d_mask, f3_screen_d], 0, {opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.35")
		.fromTo(f3_tvset_d, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.35")
		.fromTo(f3_device, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.75")
		//endframe_offer
		.add("endframe_offer", "+=2") 
		.to(endframe, 0, {opacity:1}, "endframe_offer+=0")
		.to(offer, 0, {opacity:1}, "endframe_offer+=0")
		.to(f3_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "endframe_offer+=0")
		.to(endframe_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "endframe_offer+=0")
		.to([f3_device, f3_tvset_d, f3_copy], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "endframe_offer+=0")
		.fromTo(offer_copy, 0.5, {opacity:0, x:-outdis},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=0")
		.fromTo(offer_sideBar, 0.5, {opacity:0},{opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=0.5")
		.fromTo([offer_title, offer_dollarSign, offer_price, offer_cents, offer_terms, offer_agree, offer_legal], 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "endframe_offer+=0.5")
		.fromTo(offer_bolton_copy, 0.5, {opacity:1, y:-height},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=0.5")
		.fromTo(offer_bolton_image, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "endframe_offer+=0.5")
		.fromTo(offer_ctaBox, 0.5, {opacity:0, x:30},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=1")   
	    //end
	    .add("ef")
	    //.call(function(){console.log(mainTL.duration()+" Secs");});
	    .call(at_endframe);

    };

    function build_timelines_Disneyplus_no_offer() {

	    //// MAIN ANIMATION
	    mainTL	   
		//fr1
		.add("fr1")
		//.call(function(){console.log("Disneyplus_no_offer");})
		.set([f2_bg_d, f3_bg_d, endframe_bg_d], {x:width})
		.set([f2_bg_p, f3_bg_p, f4_bg_p, endframe_bg_p], {x:width})
		.set([f1_device, f2_device, f3_tvset_p], {y:height})
		.set([f1_device, f2_device, f3_device, offer_bolton_image, no_offer_bolton_image], {y:height})
		.set([f3_tvset_d, f3_tvset_p], {y:height})
		.to(frame1, 0, {opacity:1}, "fr1+=0")
		.to(".bgs_d", 0, {opacity:1}, "fr1+=0")
		.to(".devices", 0, {opacity:1}, "fr1+=0")
		.to(f1_bg_d, .1, {opacity:1, ease:Cubic.easeInOut}, "fr1+=0")
		.fromTo(f1_copya, 0.5, {opacity:0, x:15},{opacity:1, x:0, ease:"Cubic.easeInOut"}, "fr1+=0.25")
		.fromTo(f1_copyb, 0.5, {opacity:0, y:30},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "fr1+=0.75")
		.fromTo(f1_device, 0.75, {opacity:1},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr1+=0.75")
		//fr2
		.add("fr2", "+=2") 
		.to(frame2, 0, {opacity:1}, "fr2+=0")
		.to(f1_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr2+=0")
		.to(f2_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr2+=0")
		.to([f1_copya, f1_copyb_mask], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr2+=0")
		.fromTo(f2_copya, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr2+=0.35")
		.fromTo(f2_copyb, 0.5, {opacity:0, y:30},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "fr2+=0.9")
		.fromTo(f2_device, 0.75, {opacity:1},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr2+=0.9")
		//fr3
		.add("fr3", "+=2") 
		.to(frame3, 0, {opacity:1}, "fr3+=0")
		.to(f2_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr3+=0")
		.to(f3_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr3+=0")
		.to([f2_copya, f2_copyb_mask, f1_device, f2_device], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr3+=0")
		.fromTo(f3_copy, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr3+=0.35")
		.to([f3_tv_d, tv_screen_d_mask, f3_screen_d], 0, {opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.35")
		.fromTo(f3_tvset_d, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.35")
		.fromTo(f3_device, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.75")
		//endframe_no_offer
		.add("endframe_no_offer", "+=2") 
		.to(endframe, 0, {opacity:1}, "endframe_no_offer+=0")
		.to(no_offer, 0, {opacity:1}, "endframe_no_offer+=0")
		.to(f3_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "endframe_no_offer+=0")
		.to(endframe_bg_d, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "endframe_no_offer+=0")
		.to([f3_device, f3_tvset_d, f3_copy], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "endframe_no_offer+=0")
		.fromTo(no_offer_copy, 0.5, {opacity:0, x:-indis},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_no_offer+=0.35")
		.fromTo(no_offer_bolton_image, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "endframe_no_offer+=0.35")
		.fromTo(no_offer_ctaBox, 0.5, {opacity:0, x:30},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_no_offer+=0.75") 
	    //end
	    .add("ef")
	    //.call(function(){console.log(mainTL.duration()+" Secs");});
	    .call(at_endframe);

    };

    function build_timelines_Peacock_offer() {

	    //// MAIN ANIMATION
	    mainTL	   
		//fr1
		.add("fr1")
		//.call(function(){console.log("Peacock_offer");})
		.set([f2_bg_d, f3_bg_d, endframe_bg_d], {x:width})
		.set([f2_bg_p, f3_bg_p, f4_bg_p, endframe_bg_p], {x:width})
		.set([f1_device, f2_device, f3_tvset_p], {y:height})
		.set([f1_device, f2_device, f3_device, offer_bolton_image, no_offer_bolton_image], {y:height})
		.set([f3_tvset_d, f3_tvset_p], {y:height})
		.to(frame1, 0, {opacity:1}, "fr1+=0")
		.to(".bgs_p", 0, {opacity:1}, "fr1+=0")
		.to(".devices", 0, {opacity:1}, "fr1+=0")
		.to(f1_bg_p, .1, {opacity:1, ease:Cubic.easeInOut}, "fr1+=0")
		.fromTo(f1_copya, 0.5, {opacity:0, x:15},{opacity:1, x:0, ease:"Cubic.easeInOut"}, "fr1+=0.25")
		.fromTo(f1_copyb, 0.5, {opacity:0, y:30},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "fr1+=0.75")
		.fromTo(f1_device, 0.75, {opacity:1},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr1+=0.75")
		//fr2
		.add("fr2", "+=2") 
		.to(frame2, 0, {opacity:1}, "fr2+=0")
		.to(f1_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr2+=0")
		.to(f2_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr2+=0")
		.to([f1_copya, f1_copyb_mask], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr2+=0")
		.fromTo(f2_copya, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr2+=0.35")
		.fromTo(f2_copyb, 0.5, {opacity:0, y:30},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "fr2+=0.9")
		.fromTo(f2_device, 0.75, {opacity:1},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr2+=0.9")
		//fr3
		.add("fr3", "+=2") 
		.to(frame3, 0, {opacity:1}, "fr3+=0")
		.to(f2_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr3+=0")
		.to(f3_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr3+=0")
		.to([f2_copya, f2_copyb_mask, f1_device, f2_device], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr3+=0")
		.fromTo(f3_copy, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr3+=0.35")
		.to([f3_tv_p, tv_screen_p_mask, f3_screen_p], 0, {opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.35")
		.fromTo(f3_tvset_p, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.35")
		.fromTo(f3_device, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.75")
		//fr4
		.add("fr4", "+=2") 
		.to(frame4, 0, {opacity:1}, "fr4+=0")
		.to(f3_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr4+=0")
		.to(f4_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr4+=0")
		.to(f3_copy, 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr4+=0")
		.fromTo(f4_copy, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr4+=0.35")
		.fromTo(disclaimer, 0.5, {opacity:0, x:0},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr4+=0.35")
		.fromTo(f4_screen_p, 0.5, {opacity:0, y:height},{opacity:1, y:0, ease:"Cubic.easeOut"}, "fr4+=0.35")
		//endframe_offer
		.add("endframe_offer", "+=2") 
		.to(endframe, 0, {opacity:1}, "endframe_offer+=0")
		.to(offer, 0, {opacity:1}, "endframe_offer+=0")
		.to(f4_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "endframe_offer+=0")
		.to(endframe_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "endframe_offer+=0")
		.to([f3_device, f3_tvset_p, f4_copy, disclaimer], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "endframe_offer+=0")
		.fromTo(offer_copy, 0.5, {opacity:0, x:-indis},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=0")
		.fromTo(offer_sideBar, 0.5, {opacity:0},{opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=0.5")
		.fromTo([offer_title, offer_dollarSign, offer_price, offer_cents, offer_terms, offer_agree, offer_legal], 0.5, {opacity:1, y:outdis},{y:0, opacity:1, ease:"Cubic.easeOut"}, "endframe_offer+=0.5")
		.fromTo(offer_bolton_copy, 0.5, {opacity:1, y:-height},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=0.5")
		.fromTo(offer_bolton_image, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "endframe_offer+=0.5")
		.fromTo(offer_ctaBox, 0.5, {opacity:0, x:30},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=1")   
	    //end
	    .add("ef")
	    //.call(function(){console.log(mainTL.duration()+" Secs");});
	    .call(at_endframe);

    };


    function build_timelines_Peacock_offer_modifiedtiming() {

	    //// MAIN ANIMATION
	    mainTL	   
		//fr1
		.add("fr1")
		//.call(function(){console.log("Peacock_offer");})
		.set([f2_bg_d, f3_bg_d, endframe_bg_d], {x:width})
		.set([f2_bg_p, f3_bg_p, f4_bg_p, endframe_bg_p], {x:width})
		.set([f1_device, f2_device, f3_tvset_p], {y:height})
		.set([f1_device, f2_device, f3_device, offer_bolton_image, no_offer_bolton_image], {y:height})
		.set([f3_tvset_d, f3_tvset_p], {y:height})
		.to(frame1, 0, {opacity:1}, "fr1+=0")
		.to(".bgs_p", 0, {opacity:1}, "fr1+=0")
		.to(".devices", 0, {opacity:1}, "fr1+=0")
		.to(f1_bg_p, .1, {opacity:1, ease:Cubic.easeInOut}, "fr1+=0")
		.fromTo(f1_copya, 0.5, {opacity:0, x:15},{opacity:1, x:0, ease:"Cubic.easeInOut"}, "fr1+=0.25")
		.fromTo(f1_copyb, 0.5, {opacity:0, y:30},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "fr1+=0.75")
		.fromTo(f1_device, 0.75, {opacity:1},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr1+=0.75")
		//fr2
		.add("fr2", "+=1.5") 
		.to(frame2, 0, {opacity:1}, "fr2+=0")
		.to(f1_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr2+=0")
		.to(f2_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr2+=0")
		.to([f1_copya, f1_copyb_mask], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr2+=0")
		.fromTo(f2_copya, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr2+=0.35")
		.fromTo(f2_copyb, 0.5, {opacity:0, y:30},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "fr2+=0.9")
		.fromTo(f2_device, 0.75, {opacity:1},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr2+=0.9")
		//fr3
		.add("fr3", "+=1.5") 
		.to(frame3, 0, {opacity:1}, "fr3+=0")
		.to(f2_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr3+=0")
		.to(f3_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr3+=0")
		.to([f2_copya, f2_copyb_mask, f1_device, f2_device], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr3+=0")
		.fromTo(f3_copy, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr3+=0.35")
		.to([f3_tv_p, tv_screen_p_mask, f3_screen_p], 0, {opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.35")
		.fromTo(f3_tvset_p, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.35")
		.fromTo(f3_device, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.75")
		//fr4
		.add("fr4", "+=1.5") 
		.to(frame4, 0, {opacity:1}, "fr4+=0")
		.to(f3_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr4+=0")
		.to(f4_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr4+=0")
		.to(f3_copy, 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr4+=0")
		.fromTo(f4_copy, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr4+=0.35")
		.fromTo(disclaimer, 0.5, {opacity:0, x:0},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr4+=0.35")
		.fromTo(f4_screen_p, 0.5, {opacity:0, y:height},{opacity:1, y:0, ease:"Cubic.easeOut"}, "fr4+=0.35")
		//endframe_offer
		.add("endframe_offer", "+=3.6") 
		.to(endframe, 0, {opacity:1}, "endframe_offer+=0")
		.to(offer, 0, {opacity:1}, "endframe_offer+=0")
		.to(f4_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "endframe_offer+=0")
		.to(endframe_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "endframe_offer+=0")
		.to([f3_device, f3_tvset_p, f4_copy, disclaimer], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "endframe_offer+=0")
		.fromTo(offer_copy, 0.5, {opacity:0, x:-indis},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=0")
		.fromTo(offer_sideBar, 0.5, {opacity:0},{opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=0.5")
		.fromTo([offer_title, offer_dollarSign, offer_price, offer_cents, offer_terms, offer_agree, offer_legal], 0.5, {opacity:1, y:outdis},{y:0, opacity:1, ease:"Cubic.easeOut"}, "endframe_offer+=0.5")
		.fromTo(offer_bolton_copy, 0.5, {opacity:1, y:-height},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=0.5")
		.fromTo(offer_bolton_image, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "endframe_offer+=0.5")
		.fromTo(offer_ctaBox, 0.5, {opacity:0, x:30},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_offer+=1")   
	    //end
	    .add("ef")
	    //.call(function(){console.log(mainTL.duration()+" Secs");});
	    .call(at_endframe);

    };

    function build_timelines_Peacock_no_offer() {

	    //// MAIN ANIMATION
	    mainTL	   
		//fr1
		.add("fr1")
		//.call(function(){console.log("Peacock_no_offer");})
		.set([f2_bg_d, f3_bg_d, endframe_bg_d], {x:width})
		.set([f2_bg_p, f3_bg_p, f4_bg_p, endframe_bg_p], {x:width})
		.set([f1_device, f2_device, f3_tvset_p], {y:height})
		.set([f1_device, f2_device, f3_device, offer_bolton_image, no_offer_bolton_image], {y:height})
		.set([f3_tvset_d, f3_tvset_p], {y:height})
		.to(frame1, 0, {opacity:1}, "fr1+=0")
		.to(".bgs_p", 0, {opacity:1}, "fr1+=0")
		.to(".devices", 0, {opacity:1}, "fr1+=0")
		.to(f1_bg_p, .1, {opacity:1, ease:Cubic.easeInOut}, "fr1+=0")
		.fromTo(f1_copya, 0.5, {opacity:0, x:15},{opacity:1, x:0, ease:"Cubic.easeInOut"}, "fr1+=0.25")
		.fromTo(f1_copyb, 0.5, {opacity:0, y:30},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "fr1+=0.75")
		.fromTo(f1_device, 0.75, {opacity:1},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr1+=0.75")
		//fr2
		.add("fr2", "+=2") 
		.to(frame2, 0, {opacity:1}, "fr2+=0")
		.to(f1_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr2+=0")
		.to(f2_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr2+=0")
		.to([f1_copya, f1_copyb_mask], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr2+=0")
		.fromTo(f2_copya, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr2+=0.35")
		.fromTo(f2_copyb, 0.5, {opacity:0, y:30},{y:0, opacity:1, ease:"Cubic.easeInOut"}, "fr2+=0.9")
		.fromTo(f2_device, 0.75, {opacity:1},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr2+=0.9")
		//fr3
		.add("fr3", "+=2") 
		.to(frame3, 0, {opacity:1}, "fr3+=0")
		.to(f2_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr3+=0")
		.to(f3_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr3+=0")
		.to([f2_copya, f2_copyb_mask, f1_device, f2_device], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr3+=0")
		.fromTo(f3_copy, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr3+=0.35")
		.to([f3_tv_p, tv_screen_p_mask, f3_screen_p], 0, {opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.35")
		.fromTo(f3_tvset_p, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.35")
		.fromTo(f3_device, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "fr3+=0.75")
		//fr4
		.add("fr4", "+=2") 
		.to(frame4, 0, {opacity:1}, "fr4+=0")
		.to(f3_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr4+=0")
		.to(f4_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "fr4+=0")
		.to(f3_copy, 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "fr4+=0")
		.fromTo(f4_copy, 0.5, {opacity:0, x:15},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr4+=0.35")
		.fromTo(disclaimer, 0.5, {opacity:0, x:0},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "fr4+=0.35")
		.fromTo(f4_screen_p, 0.5, {opacity:0, y:height},{opacity:1, y:0, ease:"Cubic.easeOut"}, "fr4+=0.35")
		//endframe_no_offer
		.add("endframe_no_offer", "+=2") 
		.to(endframe, 0, {opacity:1}, "endframe_no_offer+=0")
		.to(no_offer, 0, {opacity:1}, "endframe_no_offer+=0")
		.to(f4_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "endframe_no_offer+=0")
		.to(endframe_bg_p, .35, {x:0, opacity:1, ease:Cubic.easeInOut}, "endframe_no_offer+=0")
		.to([f3_device, f3_tvset_p, f4_copy, disclaimer], 0.35, {x:-outdis, opacity:0, ease:"Cubic.easeInOut"}, "endframe_no_offer+=0")
		.fromTo(no_offer_copy, 0.5, {opacity:0, x:-indis},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_no_offer+=0.35")
		.fromTo(no_offer_bolton_image, 0.5, {opacity:1, y:height},{y:0, opacity:1, ease:"Cubic.easeOut"}, "endframe_no_offer+=0.5")
		.fromTo(no_offer_ctaBox, 0.5, {opacity:0, x:30},{x:0, opacity:1, ease:"Cubic.easeInOut"}, "endframe_no_offer+=0.75") 
	    //end
	    .add("ef")
	    //.call(function(){console.log(mainTL.duration()+" Secs");});
	    .call(at_endframe);

    };

    function IDsToVars(){
	    var allElements = document.getElementsByTagName("*");

	    for (var q = 0; q<allElements.length; q++){
		    var el = allElements[q];
		    if (el.id){
			    window[el.id]=document.getElementById(el.id);
			    el.style.position = "absolute";

		    }
	    }
    };

    function initClickTag () {

	    myFT.applyClickTag(wrapper, 1);

	    wrapper.onmouseover = function() {
		    if (atEndframe===true) {
			    custom_clickthru_over();
	            //console.log("rollover");
	        }
	    };

	    wrapper.onmouseout = function() {
		    if (atEndframe===true) {
			    custom_clickthru_out();
		        //console.log("rollout");
		    }
	    };

    };

    function getElm(id) { 
	    var returnElm;
	    if (document.getElementById(id)) { returnElm=document.getElementById(id); }
	        //else { returnElm=document.getElementById(id).childNodes[0]; }
	        //else { returnElm = document.getElementsByClassName(id)[0]; } // only the 1st
	        return returnElm;
	};

	function setupMask() {
	    //f1_copyb_mask
	    var f1_copyb_mask = getElm("f1_copyb_mask");
	    //console.log(f1_copyb.offsetWidth);
	    //console.log(f1_copyb.offsetHeight);
	    //console.log(f2_copyb.style.left);
	    //console.log(f2_copyb.style.top);

	    f1_copyb_mask.style.left = f1_copyb.style.left; 
	    f1_copyb_mask.style.top = f1_copyb.style.top; 
	    f1_copyb_mask.style.width = String(Number(f1_copyb.offsetWidth)+Number("50"))+ "px"; 
	    f1_copyb_mask.style.height = f1_copyb.offsetHeight + "px"; 
	    f1_copyb.style.left = "0px";
	    f1_copyb.style.top = "0px";

        //f2_copyb_mask
        var f2_copyb_mask = getElm("f2_copyb_mask");

        f2_copyb_mask.style.left = f2_copyb.style.left; 
        f2_copyb_mask.style.top = f2_copyb.style.top; 
        f2_copyb_mask.style.width = String(Number(f2_copyb.offsetWidth)+Number("50"))+ "px"; 
        f2_copyb_mask.style.height = f2_copyb.offsetHeight + "px"; 
        f2_copyb.style.left = "0px";
        f2_copyb.style.top = "0px";

        //tv_screen_mask
        var tv_screen_d_mask = getElm("tv_screen_d_mask");
        var tv_screen_p_mask = getElm("tv_screen_p_mask");
	    /*
	    console.log(f3_screen_d.offsetWidth);
	    console.log(f3_screen_d.offsetHeight);
	    console.log(f3_screen_d.style.left);
	    console.log(f3_screen_d.style.top);
	    console.log(f3_screen_p.offsetWidth);
	    console.log(f3_screen_p.offsetHeight);
	    console.log(f3_screen_p.style.left);
	    console.log(f3_screen_p.style.top);
	    */
	    tv_screen_d_mask.style.left = f3_screen_d.style.left; 
	    tv_screen_d_mask.style.top = f3_screen_d.style.top; 
	    tv_screen_d_mask.style.width = f3_screen_d.offsetWidth + "px"; 
	    tv_screen_d_mask.style.height = f3_screen_d.offsetHeight + "px"; 
	    f3_screen_d.style.left = "0px";
	    f3_screen_d.style.top = "0px";
	    tv_screen_p_mask.style.left = f3_screen_p.style.left; 
	    tv_screen_p_mask.style.top = f3_screen_p.style.top; 
	    tv_screen_p_mask.style.width = f3_screen_p.offsetWidth + "px"; 
	    tv_screen_p_mask.style.height = f3_screen_p.offsetHeight + "px"; 
	    f3_screen_p.style.left = "0px";
	    f3_screen_p.style.top = "0px";
	    f4_screen_p.style.left = "0px";
	    f4_screen_p.style.top = "0px";
	};

	function insertCopy(_target, _copy, _style){

		var _breakStr = _style.split(',');
		var _len = _breakStr.length;

		_target.innerHTML = _copy;

		var _styleValue;

		for (var i = 0; i < _len; i ++) {

			var _a;

			if (_target === offer_ctaCopy || _target === no_offer_ctaCopy) {

				if (_breakStr[i].search('posX:') > -1) {

					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.left = _styleValue + 'px';
					TweenMax.set(_target, {x:parseInt(_styleValue)})

				} else if (_breakStr[i].search('posY:') > -1) {
					
					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					//_target.style.top = _styleValue + 'px';
					TweenMax.set(_target, {y:parseInt(_styleValue)})
					

				}

			} else {

				if (_breakStr[i].search('posX:') > -1) {

					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					_target.style.left = _styleValue + 'px';
					//TweenMax.set([_target], {x:parseInt(_styleValue)});
					

				} else if(_breakStr[i].search('posY:') > -1) {
					
					_a = _breakStr[i].indexOf(':');
					_styleValue = _breakStr[i].slice(_a + 1);
					_target.style.top = _styleValue + 'px';
					// TweenMax.set(_target, {y:parseInt(_styleValue)})

				}

			}

			if (_breakStr[i].search('fontSize:') > -1) {
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.fontSize = _styleValue + "px";

			} else if (_breakStr[i].search('fontColor:') > -1) {
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.color = _styleValue;

			} else if (_breakStr[i].search('shadow:') > -1) {
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.textShadow = _styleValue;

			} else if(_breakStr[i].search('lineHeight:') > -1) {

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.lineHeight = _styleValue + "em";

			} else if (_breakStr[i].search('letterSpacing') > -1) {

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.letterSpacing = _styleValue + 'px';

			} else if (_breakStr[i].search('textAlign') > -1) {

				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.textAlign = _styleValue;

			} else if(_breakStr[i].search('width:') > -1) {
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.width = _styleValue + 'px';

			} else if(_breakStr[i].search('height:') > -1) {
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.height = _styleValue + 'px';

			} else if (_breakStr[i].search('bgColor:') > -1) {
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.backgroundColor = _styleValue;

			} else if (_breakStr[i].search('Opacity:') > -1) {
				
				_a = _breakStr[i].indexOf(':');
				_styleValue = _breakStr[i].slice(_a + 1);
				_target.style.Opacity = _styleValue;

			} 

		}

	};

	function insertImage(_target, _img, _imgStyle, _isBackground) {
		if (_isBackground === true) {
			//_target.style.width = width + 'px';
			//_target.style.height = height + 'px';
			_target.style.backgroundSize = 'contain';
			_target.style.backgroundRepeat = 'no-repeat';
			_target.style.backgroundImage = "url('" + _img + "')";
		} else {
			_target.innerHTML = '<img src="' + _img + '" />';
		}

		var _img_breakStr = _imgStyle.split(',');
		var _img_len = _img_breakStr.length;

		var _img_styleValue;

		for (var i = 0; i < _img_len; i ++) {

			var _a;

			if (_img_breakStr[i].search('scale:') > -1) {
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				TweenMax.set(_target, {scale:_img_styleValue});

			} else if(_img_breakStr[i].search('posX:') > -1) {
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				_target.style.left = _img_styleValue + 'px';
				//TweenMax.set(_target, {x:_img_styleValue});
				
			} else if(_img_breakStr[i].search('posY:') > -1) {
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				_target.style.top = _img_styleValue + 'px';
				//TweenMax.set(_target, {y:_img_styleValue});

			} else if (_img_breakStr[i].search('width:') > -1) {
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				_target.style.width = _img_styleValue + 'px';

			} else if(_img_breakStr[i].search('height:') > -1) {
				
				_a = _img_breakStr[i].indexOf(':');
				_img_styleValue = _img_breakStr[i].slice(_a + 1);
				_target.style.height = _img_styleValue + 'px';

			}

		}

	};

	function startAnimation(){
		// Code for animation		
		mainTL.play();
	};

	function onAnimationComplete(){
		// Log duration of timeline
		console.log( 'Animation Duration: ' + mainTL.time() + 's' );
		endFrameReached = true;
	};

    //// INTERACTION
    function clickthru_over() {
	    //console.log("atEndframe = " + atEndframe)
	    //console.log("arrowTL.isActive = " + !arrowTL.isActive())
	    if (atEndframe===true) {
		    custom_clickthru_over(); // in animation.js
		    //console.log("rollover");
		}
	}

	function clickthru_out() {
		if (atEndframe===true) {
			custom_clickthru_out();
	        //console.log("rollout");
	    }
	}

	function custom_clickthru_over() {
		TweenLite.to(".cta", 0, {backgroundColor:"rgba(0, 0, 0, 1)", opacity:1, ease:"Power1.easeIn"});
		TweenLite.to(".cta", 0, {color:"rgba(255, 255, 255, 1)", opacity:1, ease:"Power1.easeOut"});
    };

    function custom_clickthru_out() {
	    TweenLite.to(".cta", 0, {backgroundColor:"rgba(255, 255, 255, 1)", opacity:1, ease:"Power1.easeIn"});
	    TweenLite.to(".cta", 0, {color:"rgba(0, 0, 0, 1)", opacity:1, ease:"Power1.easeOut"});
    }

	//// ENDFRAME
	function at_endframe() {
		atEndframe=true;
	}

	function jump_to_endframe() {
		atEndframe=true;
		skipped=true;
	    //try {mainTL.pause("ef");} catch(e) { } // mainTL may not have been created yet
	}

	function fireReportingEvent() {
		let reportingDimensions = [
			myFT.instantAds.offerPrice_reporting,
			myFT.instantAds.cta_reporting,
			myFT.instantAds.offer_reporting,
		];
		let trimmedReportingDimensions = reportingDimensions.map((s) => s.trim());
		let validReportingDimension = trimmedReportingDimensions.every(
			(s) => s.length > 0
		);
		let reportingLabel = trimmedReportingDimensions.join("_");
		if (validReportingDimension) {
			Tracker.impressionTrackEvent(reportingLabel);
		}
		// For QA and Dev
		if (window.parent.document.referrer.includes("creativepreview.flashtalking.net")) {
			console.log(reportingLabel);
			console.table({"FT_product": {"Offer Price": reportingDimensions[0], "CTA": reportingDimensions[1], "Offer Type": reportingDimensions[2]}})
		}
    }
}