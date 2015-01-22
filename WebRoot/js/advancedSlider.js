(function(h) {
	function Oa(ra, T) {
		function I() {
			n.addClass("advanced-slider");
			n.addClass(c.settings.skin);
			if (h.browser.mozilla)
				n.addClass("mozilla");
			else if (h.browser.webkit)
				n.addClass("webkit");
			else if (h.browser.opera)
				n.addClass("opera");
			else if (h.browser.msie)
				if (parseInt(h.browser.version) == 6)
					n.addClass("ie6");
				else if (parseInt(h.browser.version) == 7)
					n.addClass("ie7");
				else if (parseInt(h.browser.version) == 8)
					n.addClass("ie8");
				else
					parseInt(h.browser.version) == 9 && n.addClass("ie9");
			A = h('<div class="slide-wrapper"></div>')
					.appendTo(n)
					.css({
						width : c.settings.width,
						height : c.settings.height
					})
					.hover(
							function() {
								if (c.settings.timerAnimation
										&& c.settings.fadeTimer && C != "stop"
										&& !E) {
									var f = n.find(".timer-animation");
									h.browser.msie
											&& parseInt(h.browser.version) < 9 ? f
											.css("filter", "")
											: f.stop().animate({
												opacity : 1
											}, c.settings.timerFadeDuration)
								}
								U = true;
								c.settings.slideshow
										&& c.settings.pauseSlideshowOnHover
										&& C != "stop" && !E && fa();
								Z && c.settings.hideCaption && Ea();
								if (c.settings.navigationArrows
										&& c.settings.fadeNavigationArrows)
									h.browser.msie
											&& parseInt(h.browser.version) < 9 ? n
											.find(".navigation-arrows a")
											.stop().show()
											: n
													.find(
															".navigation-arrows a")
													.stop()
													.animate(
															{
																opacity : 1
															},
															c.settings.navigationArrowsShowDuration);
								if (c.settings.slideshowControls
										&& c.settings.fadeSlideshowControls)
									h.browser.msie
											&& parseInt(h.browser.version) < 9 ? n
											.find(".slideshow-controls").stop()
											.show()
											: n
													.find(".slideshow-controls")
													.stop()
													.animate(
															{
																opacity : 1
															},
															c.settings.slideshowControlsShowDuration)
							},
							function() {
								if (c.settings.timerAnimation
										&& c.settings.fadeTimer && C != "stop"
										&& !E) {
									var f = n.find(".timer-animation");
									h.browser.msie
											&& parseInt(h.browser.version) < 9 ? f
											.css("opacity", 0)
											: f.stop().animate({
												opacity : 0
											}, c.settings.timerFadeDuration)
								}
								U = false;
								c.settings.slideshow
										&& c.settings.pauseSlideshowOnHover
										&& C != "stop" && !E && !ga && sa();
								Z && c.settings.hideCaption && Fa();
								if (c.settings.navigationArrows
										&& c.settings.fadeNavigationArrows)
									h.browser.msie
											&& parseInt(h.browser.version) < 9 ? n
											.find(".navigation-arrows a")
											.stop().hide()
											: n
													.find(
															".navigation-arrows a")
													.stop()
													.animate(
															{
																opacity : 0
															},
															c.settings.navigationArrowsHideDuration);
								if (c.settings.slideshowControls
										&& c.settings.fadeSlideshowControls)
									h.browser.msie
											&& parseInt(h.browser.version) < 9 ? n
											.find(".slideshow-controls").stop()
											.hide()
											: n
													.find(".slideshow-controls")
													.stop()
													.animate(
															{
																opacity : 0
															},
															c.settings.slideshowControlsHideDuration)
							});
			n.css({
				width : A.outerWidth(true),
				height : A.outerHeight(true)
			});
			c.settings.shuffle && w.sort(function() {
				return 0.5 - Math.random()
			});
			c.settings.lightbox && h.fn.prettyPhoto({
				default_width : c.settings.lightboxDefaultWidth,
				default_height : c.settings.lightboxDefaultHeight,
				theme : c.settings.lightboxTheme,
				opacity : c.settings.lightboxOpacity,
				horizontal_padding : c.settings.lightboxHorizontalPadding,
				overlay_gallery : false,
				callback : function() {
					ga = false;
					c.settings.slideshow && C != "stop" && sa()
				}
			});
			c.settings.navigationArrows && Pa();
			c.settings.navigationButtons && Qa();
			c.settings.shadow && Ra();
			c.settings.thumbnailsType == "navigation" && Sa();
			c.settings.slideshowControls && Ta();
			if (c.settings.slidesPreloaded) {
				Ga();
				for ( var a = 0, b = c.settings.slidesPreloaded == -1 ? w.length
						: c.settings.slidesPreloaded, d = 0; d < b; d++)
					h("<img/>").load(function() {
						a++;
						if (a == b) {
							ta();
							Q(c.settings.slideStart)
						}
					}).error(function() {
						a++
					}).attr("src", w[d].path)
			} else
				Q(c.settings.slideStart)
		}
		function Pa() {
			navigationArrows = h('<div class="navigation-arrows"></div>')
					.appendTo(A);
			previousArrow = h('<a class="previous"></a>').appendTo(
					navigationArrows).click(function() {
				$()
			});
			nextArrow = h('<a class="next"></a>').appendTo(navigationArrows)
					.click(function() {
						aa()
					});
			if (c.settings.fadeNavigationArrows)
				if (h.browser.msie && parseInt(h.browser.version) < 9) {
					previousArrow.hide();
					nextArrow.hide()
				} else {
					previousArrow.css("opacity", 0);
					nextArrow.css("opacity", 0)
				}
		}
		function Ta() {
			var a = h('<div class="slideshow-controls"></div>').appendTo(A);
			a.addClass(c.settings.slideshow ? "pause" : "play").click(
					function() {
						if (h(this).hasClass("pause")) {
							h(this).removeClass("pause").addClass("play");
							C = "stop";
							ha()
						} else if (h(this).hasClass("play")) {
							if (!c.settings.slideshow)
								c.settings.slideshow = true;
							h(this).removeClass("play").addClass("pause");
							C = "play";
							ua()
						}
					});
			if (c.settings.fadeSlideshowControls)
				h.browser.msie && parseInt(h.browser.version) < 9 ? a.hide()
						: a.css("opacity", 0)
		}
		function Qa() {
			var a = w.length, b = h('<div class="navigation-buttons"></div>')
					.appendTo(A);
			h('<div class="left"></div>').appendTo(b);
			var d = h('<div class="middle"></div>').appendTo(b);
			h('<div class="right"></div>').appendTo(b);
			for ( var f = h('<div class="buttons"></div>').appendTo(d), i = 0; i < a; i++) {
				var e = h('<a rel="' + i + '"></a>').appendTo(f);
				c.settings.navigationButtonsNumbers
						&& h('<div class="number">' + (i + 1) + "</div>")
								.appendTo(e);
				e.hover(function() {
					var g = h(this).attr("rel");
					h(this).hasClass("select") || h(this).addClass("over");
					c.settings.thumbnailsType == "tooltip" && Ua(g)
				}, function() {
					h(this).hasClass("select") || h(this).removeClass("over");
					c.settings.thumbnailsType == "tooltip" && Va()
				});
				e.click(function() {
					Q(parseInt(h(this).attr("rel")))
				})
			}
			if (c.settings.navigationButtonsContainerCenter) {
				a = (A.innerWidth() - b.outerWidth(true)) / 2;
				b.css("left", a)
			}
			if (c.settings.navigationButtonsCenter) {
				a = (d.outerWidth(true) - f.outerWidth(true)) / 2;
				f.css("left", a)
			}
			d = parseInt(b.css("top")) + b.outerHeight(true);
			d = n.outerHeight() < d ? d - n.outerHeight() : 0;
			n.css("height", n.outerHeight() + d);
			if (c.settings.fadeNavigationButtons) {
				h.browser.msie && parseInt(h.browser.version) < 9 ? b.hide()
						: b.css("opacity", 0);
				n.hover(function() {
					h.browser.msie && parseInt(h.browser.version) < 9 ? b
							.show() : b.stop().animate({
						opacity : 1
					}, c.settings.navigationButtonsShowDuration)
				}, function() {
					h.browser.msie && parseInt(h.browser.version) < 9 ? b
							.hide() : b.stop().animate({
						opacity : 0
					}, c.settings.navigationButtonsHideDuration)
				})
			}
		}
		function Ra() {
			var a = h('<div class="shadow"></div>').appendTo(n), b = h(
					'<div class="shadow-left"></div>').appendTo(a), d = h(
					'<div class="shadow-middle"></div>').appendTo(a), f = h(
					'<div class="shadow-right"></div>').appendTo(a);
			a.css({
				width : A.outerWidth(),
				top : A.outerHeight()
			});
			b = a.outerWidth() - b.outerWidth() - f.outerWidth();
			d.css("width", b);
			a = parseInt(a.css("top")) + a.outerHeight()
					+ parseInt(a.css("margin-top"));
			a = n.outerHeight() < a ? a - n.outerHeight() : 0;
			n.css("height", n.outerHeight() + a)
		}
		function Ua(a) {
			if (w[a].thumbnail) {
				var b = A.find(".navigation-buttons a").eq(a), d = w[a].thumbnail, f = h(
						'<div class="thumbnail"></div>').css({
					width : c.settings.thumbnailWidth,
					height : c.settings.thumbnailHeight
				}).appendTo(n.find(".navigation-buttons .buttons")), i = parseInt(b
						.position().left)
						- (parseInt(f.outerWidth(true)) - parseInt(b
								.css("width"))) / 2;
				b = parseInt(b.position().top) - parseInt(f.outerHeight(true));
				f.css({
					left : i,
					top : b - c.settings.thumbnailSlideAmount,
					opacity : 0
				});
				h("<img/>").load(function() {
					f.css("background-image", "url(" + d + ")")
				}).attr("src", d);
				f.animate({
					top : b,
					opacity : 1
				}, c.settings.thumbnailSlideDuration,
						c.settings.thumbnailSlideEasing);
				if (w[a].thumbnailCaption) {
					i = h('<div class="caption"></div>').appendTo(f);
					h('<div class="background"></div>').appendTo(i);
					a = h(
							'<div class="content">' + w[a].thumbnailCaption
									+ "</div>").appendTo(i);
					i.css("height", a.outerHeight(true));
					c.settings.thumbnailCaptionPosition == "top" ? i.css({
						top : 0
					}) : i.css({
						bottom : 0
					})
				}
			}
		}
		function Va() {
			var a = n.find(".navigation-buttons .thumbnail");
			a
					&& a.animate({
						top : parseInt(a.css("top"))
								- c.settings.thumbnailSlideAmount,
						opacity : 0
					}, c.settings.thumbnailSlideDuration,
							c.settings.thumbnailSlideEasing, function() {
								a.remove()
							})
		}
		function Q(a) {
			if (E)
				if (c.settings.overrideTransition) {
					ha();
					va()
				} else
					return;
			c.settings.slideshow && ha();
			if (Z) {
				Z = false;
				Fa(true)
			}
			E = true;
			L = z;
			z = a;
			var b = w[z];
			if (b.path) {
				Ga();
				h("<img/>").load(
						function() {
							b.width = h(this).attr("width")
									|| h(this).prop("width");
							b.height = h(this).attr("height")
									|| h(this).prop("height");
							ta();
							Ha()
						}).error(function() {
					ta();
					E = false;
					z > L ? aa() : $()
				}).attr("src", b.path)
			} else {
				b.width = c.settings.width;
				b.height = c.settings.height;
				Ha()
			}
			if (c.settings.navigationButtons) {
				var d = n.find(".navigation-buttons");
				d.find(".select").removeClass("select");
				d.find("a").eq(a).attr("class", "select")
			}
			if (c.settings.thumbnailsType == "navigation") {
				q.find(".thumbnail.select").removeClass("select");
				q.find("a").eq(a).removeClass("over").addClass("select");
				if (c.settings.thumbnailSync) {
					a = Math.floor(a / c.settings.visibleThumbnails);
					a != J && V(a)
				}
			}
			a = {
				type : "slideOpen",
				index : z,
				data : w[z]
			};
			h.isFunction(c.settings.slideOpen)
					&& c.settings.slideOpen.call(this, a)
		}
		function aa() {
			Q(z == w.length - 1 ? 0 : z + 1)
		}
		function $() {
			Q(z == 0 ? w.length - 1 : z - 1)
		}
		function Ga() {
			var a = h('<div class="preloader"></div>').hide().appendTo(n), b = (A
					.outerWidth(true) - a.outerWidth(true)) * 0.5, d = (A
					.outerHeight(true) - a.outerHeight(true)) * 0.5;
			a.delay(100).fadeIn(300);
			a.css({
				left : b,
				top : d
			})
		}
		function ta() {
			n.find(".preloader").stop().remove()
		}
		function Ha() {
			var a = w[z], b = a.properties, d = b.alignType, f = b.htmlDuringTransition, i = parseInt(b.horizontalSlices), e = parseInt(b.verticalSlices), g = b.slicePattern, j = b.effectType, m = b.slicePoint, o = b.slideStartPosition, s = parseFloat(b.slideStartRatio), u = parseInt(b.sliceDuration), k = b.sliceEasing, r = parseInt(b.sliceDelay), v = b.sliceFade == true
					|| j == "fade" ? 0 : 1, t = b.simpleSlideDirection, p = b.simpleSlideDuration, y = b.simpleSlideEasing;
			fadePreviousSlide = b.fadePreviousSlide;
			fadePreviousSlideDuration = b.fadePreviousSlideDuration;
			if (B && j == "simpleSlide")
				if (B.is(":animated")) {
					B.appendTo(A);
					B.stop().css({
						top : 0,
						left : 0
					});
					A.find(".simple-slide-container").remove()
				}
			if (L != -1) {
				var M = n.find(".slide").css("z-index");
				N = n.find(".slide").css("z-index", M - 1);
				M = w[L].width;
				var W = w[L].height, ba = a.width, ca = a.height;
				if (j != "simpleSlide"
						&& (fadePreviousSlide == true || ba < c.settings.width
								&& ba < M || ca < c.settings.height && ca < W))
					N.fadeOut(fadePreviousSlideDuration)
			}
			B = h('<div class="slide"></div>').appendTo(A);
			B.hover(
					function() {
						var R = {
							type : "slideMouseOver",
							index : z,
							data : a
						};
						h.isFunction(c.settings.slideMouseOver)
								&& c.settings.slideMouseOver.call(this, R)
					},
					function() {
						var R = {
							type : "slideMouseOut",
							index : z,
							data : a
						};
						h.isFunction(c.settings.slideMouseOut)
								&& c.settings.slideMouseOut.call(this, R)
					}).click(
					function() {
						var R = {
							type : "slideClick",
							index : z,
							data : a
						};
						h.isFunction(c.settings.slideClick)
								&& c.settings.slideClick.call(this, R)
					});
			M = Math.floor(Math.min(a.width, c.settings.width) / i);
			W = Math.floor(Math.min(a.height, c.settings.height) / e);
			ba = a.width > c.settings.width ? Ia(d, a.width, c.settings.width)
					: 0;
			d = a.height > c.settings.height ? Ja(d, a.height,
					c.settings.height) : 0;
			ca = a.width < c.settings.width ? Math
					.floor((c.settings.width - a.width) / 2) : 0;
			var Ka = a.height < c.settings.height ? Math
					.floor((c.settings.height - a.height) / 2) : 0, La = [];
			b.slideMask && B.css("overflow", "hidden");
			if (j == "random")
				j = da([ "scale", "width", "height", "slide", "fade",
						"simpleSlide" ]);
			if (j == "simpleSlide") {
				var ia = h('<div class="simple-slide-container"></div>').css({
					overflow : "hidden",
					position : "absolute",
					width : "100%",
					height : "100%"
				}).appendTo(A);
				a.path
						&& B.css(
								{
									"background-image" : "url(" + a.path + ")",
									"background-position" : -ba + ca + "px "
											+ (-d + Ka) + "px",
									"background-repeat" : "no-repeat"
								}).appendTo(ia);
				if (a.html && f) {
					b = ja ? h("<div>" + a.html + "</div>").clone() : a.html
							.clone();
					b.css({
						left : 0,
						top : 0,
						width : c.settings.width,
						height : c.settings.height,
						overflow : "hidden",
						position : "absolute"
					});
					B.html(b).appendTo(ia)
				}
				N && N.appendTo(ia);
				if (t == "random")
					t = da([ "autoHorizontal", "autoVertical", "rightToLeft",
							"leftToRight", "topToBottom", "bottomToTop" ]);
				j = {};
				var F, K;
				switch (t) {
				case "autoHorizontal":
					F = "left";
					K = z > L ? c.settings.width : -c.settings.width;
					break;
				case "autoVertical":
					F = "top";
					K = z > L ? c.settings.height : -c.settings.height;
					break;
				case "rightToLeft":
					F = "left";
					K = c.settings.width;
					break;
				case "leftToRight":
					F = "left";
					K = -c.settings.width;
					break;
				case "topToBottom":
					F = "top";
					K = -c.settings.height;
					break;
				case "bottomToTop":
					F = "top";
					K = c.settings.height;
					break;
				default:
					F = "left";
					K = z > L ? c.settings.width : -c.settings.width
				}
				B.css(F, K);
				j[F] = 0;
				B.animate(j, {
					duration : p,
					easing : y,
					complete : function() {
						B.appendTo(A);
						ia.remove();
						va()
					},
					step : function(R) {
						N && N.css(F, R - K)
					}
				})
			} else {
				for (t = 0; t < i; t++)
					for (p = 0; p < e; p++) {
						y = h('<div class="slice"></div>').css({
							left : t * M + ca,
							top : p * W + Ka,
							width : M,
							height : W,
							opacity : v,
							visibility : "hidden"
						}).data({
							hPos : t,
							vPos : p
						}).appendTo(B);
						a.path
								&& y.css({
									"background-image" : "url(" + a.path + ")",
									"background-position" : -(t * M + ba)
											+ "px " + -(p * W + d) + "px",
									"background-repeat" : "no-repeat"
								});
						if (a.html && f) {
							b = ja ? h("<div>" + a.html + "</div>").clone()
									: a.html.clone();
							b.css({
								left : -t * M,
								top : -p * W,
								width : a.width,
								height : a.height,
								overflow : "hidden",
								position : "absolute"
							});
							y.html(b).css("overflow", "hidden")
						}
						La.push(y)
					}
				if (g == "random")
					g = da([ "randomPattern", "topToBottom", "bottomToTop",
							"leftToRight", "rightToLeft",
							"topLeftToBottomRight", "topRightToBottomLeft",
							"bottomLeftToTopRight", "bottomRightToTopLeft",
							"horizontalMarginToCenter",
							"horizontalCenterToMargin", "marginToCenter",
							"verticalCenterToMargin", "skipOneTopToBottom",
							"skipOneBottomToTop", "skipOneLeftToRight",
							"skipOneRightToLeft", "skipOneHorizontal",
							"skipOneVertical", "spiralMarginToCenterCW",
							"spiralMarginToCenterCCW",
							"spiralCenterToMarginCW", "spiralCenterToMarginCCW" ]);
				if (i == 1 && e == 1)
					g = "topToBottom";
				if (m == "random")
					m = da([ "leftTop", "leftCenter", "leftBottom",
							"centerTop", "centerCenter", "centerBottom",
							"rightTop", "rightCenter", "rightBottom" ]);
				if (o == "random")
					o = da([ "left", "right", "top", "bottom", "leftTop",
							"rightTop", "leftBottom", "horizontalAlternative",
							"verticalAlternative" ]);
				f = Wa(La, g, i, e);
				i = f.length;
				for (t = 0; t < i; t++)
					Xa(f[t], t, i, j, m, o, s, u, k, r)
			}
			j = {
				type : "transitionStart",
				index : z,
				data : a
			};
			h.isFunction(c.settings.transitionStart)
					&& c.settings.transitionStart.call(this, j)
		}
		function va() {
			var a = w[z], b = a.properties.alignType, d = Ia(b, a.width,
					c.settings.width);
			b = Ja(b, a.height, c.settings.height);
			var f = a.properties.effectType, i = a.properties.htmlDuringTransition;
			E = false;
			if (f != "simpleSlide") {
				B.find(".slice").each(function() {
					clearTimeout(h(this).data("timer"));
					h(this).remove()
				});
				a.path && B.css({
					"background-image" : "url(" + a.path + ")",
					"background-position" : -d + "px " + -b + "px",
					"background-repeat" : "no-repeat"
				})
			}
			if (a.html && (f != "simpleSlide" || !i)) {
				d = ja ? h("<div>" + a.html + "</div>") : a.html;
				d.css({
					left : 0,
					top : 0,
					width : c.settings.width,
					height : c.settings.height,
					overflow : "hidden",
					position : "absolute"
				});
				B.html(d)
			}
			if (a.link) {
				B.css("cursor", "pointer");
				B.click(function() {
					a.link.substr(0, 1) == "#" ? h("html, body").animate({
						scrollTop : h(a.link).offset().top
					}, 700) : window.open(a.link, a.properties.linkTarget)
				})
			}
			if (c.settings.lightbox && a.lightbox) {
				B.css("cursor", "pointer");
				B
						.click(function() {
							c.settings.slideshow && C != "stop" && fa();
							ga = true;
							var e = a.lightbox.lightbox_index;
							h.prettyPhoto
									.changeSettings({
										default_width : a.properties.lightboxDefaultWidth,
										default_height : a.properties.lightboxDefaultHeight,
										theme : a.properties.lightboxTheme,
										opacity : a.properties.lightboxOpacity,
										horizontal_padding : a.properties.lightboxHorizontalPadding,
										current_position : c.settings.lightboxNavigation ? e
												: -1
									});
							c.settings.lightboxNavigation ? h.prettyPhoto.open(
									X, ka, la) : h.prettyPhoto.open(X[e],
									ka[e], la[e])
						})
			}
			N && N.remove();
			c.settings.slideshow && C != "stop" && ua();
			c.settings.slideshow && c.settings.pauseSlideshowOnHover && U
					&& fa();
			a.caption && Ya();
			d = {
				type : "transitionComplete",
				index : z,
				data : a
			};
			h.isFunction(c.settings.transitionComplete)
					&& c.settings.transitionComplete.call(this, d)
		}
		function da(a) {
			return a[Math.floor(Math.random() * a.length)]
		}
		function Xa(a, b, d, f, i, e, g, j, m, o) {
			var s = {}, u = {}, k = parseInt(a.css("width")), r = parseInt(a
					.css("height")), v = parseInt(a.css("left")), t = parseInt(a
					.css("top")), p, y;
			if (f == "scale" || f == "width" || f == "height")
				switch (i) {
				case "centerCenter":
					y = t + r * 0.5;
					p = v + k * 0.5;
					break;
				case "rightCenter":
					y = t + r * 0.5;
					p = v + k;
					break;
				case "leftCenter":
					y = t + r * 0.5;
					p = v;
					break;
				case "centerTop":
					y = t;
					p = v + k * 0.5;
					break;
				case "rightTop":
					y = t;
					p = v + k;
					break;
				case "leftTop":
					y = t;
					p = v;
					break;
				case "centerBottom":
					y = t + r;
					p = v + k * 0.5;
					break;
				case "rightBottom":
					y = t + r;
					p = v + k;
					break;
				case "leftBottom":
					y = t + r;
					p = v;
					break;
				default:
					y = t + r * 0.5;
					p = v + k * 0.5
				}
			else if (f == "slide")
				switch (e) {
				case "left":
					y = t;
					p = v - k * g;
					break;
				case "right":
					y = t;
					p = v + k * g;
					break;
				case "top":
					y = t - r * g;
					p = v;
					break;
				case "bottom":
					y = t + r * g;
					p = v;
					break;
				case "leftTop":
					y = t - r * g;
					p = v - k * g;
					break;
				case "rightTop":
					y = t - r * g;
					p = v + k * g;
					break;
				case "leftBottom":
					y = t + r * g;
					p = v - k * g;
					break;
				case "rightBottom":
					y = t + r * g;
					p = v + k * g;
					break;
				case "horizontalAlternative":
					y = t;
					p = v + k * g * (b % 2 == 0 ? 1 : -1);
					break;
				case "verticalAlternative":
					y = t + r * g * (b % 2 == 0 ? 1 : -1);
					p = v;
					break;
				default:
					y = t;
					p = v - k * g
				}
			switch (f) {
			case "fade":
				u = {
					opacity : 1
				};
				break;
			case "scale":
				s = {
					width : 0,
					height : 0,
					left : p,
					top : y
				};
				u = {
					width : k,
					height : r,
					left : v,
					top : t,
					opacity : 1
				};
				break;
			case "width":
				s = {
					width : 0,
					left : p
				};
				u = {
					width : k,
					left : v,
					opacity : 1
				};
				break;
			case "height":
				s = {
					height : 0,
					top : y
				};
				u = {
					height : r,
					top : t,
					opacity : 1
				};
				break;
			case "slide":
				s = {
					left : p,
					top : y
				};
				u = {
					left : v,
					top : t,
					opacity : 1
				};
				break;
			default:
				u = {
					opacity : 1
				}
			}
			a.css(s);
			f = setTimeout(function() {
				a.css("visibility", "visible");
				a.animate(u, j, m, function() {
					b == d - 1 && va()
				})
			}, b * o);
			a.data("timer", f)
		}
		function Ya() {
			Z = true;
			var a = w[z], b = a.properties, d = b.captionBackgroundOpacity;
			b = b.captionBackgroundColor;
			var f = h('<div class="caption"></div>').appendTo(A);
			f = h('<div class="wrapper"></div>').appendTo(f);
			h('<div class="background"></div>').css({
				opacity : d,
				"background-color" : b
			}).appendTo(f);
			h('<div class="content"></div>').html(a.caption).appendTo(f);
			if (!c.settings.hideCaption || c.settings.hideCaption && U)
				Ea()
		}
		function Ea() {
			var a = w[z], b = a.properties, d = b.captionPosition, f = parseInt(b.captionSize), i = parseInt(b.captionWidth), e = parseInt(b.captionHeight), g = parseInt(b.captionLeft), j = parseInt(b.captionTop), m = b.captionShowEffect, o = parseInt(b.captionShowEffectDuration), s = b.captionShowEffectEasing, u = b.captionShowSlideDirection, k = Math
					.min(a.width, c.settings.width);
			a = Math.min(a.height, c.settings.height);
			i = d == "custom" ? i : k;
			e = d == "custom" ? e : a;
			g = d == "custom" ? g : (c.settings.width - i) / 2;
			j = d == "custom" ? j : (c.settings.height - e) / 2;
			k = A.find(".caption");
			a = k.find(".wrapper");
			var r = a.find(".background"), v = a.find(".content"), t = b.captionBackgroundOpacity;
			b = b.captionBackgroundColor;
			var p = m == "fade" ? 0 : f;
			switch (d) {
			case "left":
				k.css({
					width : f,
					height : e,
					left : g,
					top : j
				});
				u == "auto" && a.css({
					width : f,
					height : e,
					left : -p,
					top : 0
				});
				break;
			case "right":
				k.css({
					width : f,
					height : e,
					right : g,
					top : j
				});
				u == "auto" && a.css({
					width : f,
					height : e,
					left : p,
					top : 0
				});
				break;
			case "top":
				k.css({
					width : i,
					height : f,
					left : g,
					top : j
				});
				u == "auto" && a.css({
					width : i,
					height : f,
					left : 0,
					top : -p
				});
				break;
			case "bottom":
				k.css({
					width : i,
					height : f,
					left : g,
					bottom : j
				});
				u == "auto" && a.css({
					width : i,
					height : f,
					left : 0,
					top : p
				});
				break;
			case "custom":
				k.css({
					width : i,
					height : e,
					left : g,
					top : j
				});
				a.css({
					width : i,
					height : e,
					left : 0,
					top : 0
				});
				break;
			case "default":
				k.css({
					width : i,
					height : f,
					left : g,
					bottom : j
				});
				u == "auto" && a.css({
					width : i,
					height : f,
					left : 0,
					top : p
				})
			}
			if (m == "fade")
				if (h.browser.msie && parseInt(h.browser.version) < 9)
					if (h.browser.version != "6.0") {
						v.css({
							opacity : 0
						});
						v.animate({
							opacity : 1
						}, o, s, function() {
							v.css("filter", "")
						});
						r.css({
							opacity : 0
						});
						r.animate({
							opacity : t
						}, o, s)
					} else {
						a.css("opacity", 1);
						v.css("opacity", 1);
						r.css("opacity", 1);
						a.css("background-color", b)
					}
				else {
					a.css({
						opacity : 0
					});
					a.animate({
						opacity : 1
					}, o, s)
				}
			else {
				a.css({
					opacity : 1
				});
				v.css("opacity", 1);
				r.css("opacity", t);
				d == "custom" && k.css({
					width : i,
					height : e,
					left : g,
					top : j
				});
				if (u == "topToBottom")
					a.css({
						width : i,
						height : e,
						left : 0,
						top : -e
					});
				else if (u == "bottomToTop")
					a.css({
						width : i,
						height : e,
						left : 0,
						top : e
					});
				else if (u == "leftToRight")
					a.css({
						width : i,
						height : e,
						left : -i,
						top : 0
					});
				else
					u == "rightToLeft" && a.css({
						width : i,
						height : e,
						left : i,
						top : 0
					});
				h.browser.msie && h.browser.version == "6.0"
						&& a.css("background-color", b);
				a.animate({
					top : 0,
					left : 0
				}, o, s)
			}
		}
		function Fa(a) {
			var b = A.find(".caption"), d = b.find(".wrapper"), f = d
					.find(".background"), i = d.find(".content"), e = w[z].properties, g = e.captionPosition, j = e.captionHideEffect, m = parseInt(e.captionHideEffectDuration), o = e.captionHideEffectEasing;
			e = e.captionHideSlideDirection;
			if (j == "fade")
				if (h.browser.msie && parseInt(h.browser.version) < 9)
					if (h.browser.version != "6.0") {
						i.animate({
							opacity : 0
						}, m, o, function() {
							a && b.remove()
						});
						f.animate({
							opacity : 0
						}, m, o)
					} else {
						i.css("opacity", 0);
						f.css("opacity", 0);
						d.css("opacity", 0);
						a && b.remove()
					}
				else
					d.animate({
						opacity : 0
					}, m, o, function() {
						a && b.remove()
					});
			else if (e == "topToBottom")
				d.animate({
					top : parseInt(d.css("height"))
				}, m, function() {
					a && b.remove()
				});
			else if (e == "bottomToTop")
				d.animate({
					top : -parseInt(d.css("height"))
				}, m, function() {
					a && b.remove()
				});
			else if (e == "leftToRight")
				d.animate({
					left : parseInt(d.css("width"))
				}, m, function() {
					a && b.remove()
				});
			else if (e == "rightToLeft")
				d.animate({
					left : -parseInt(d.css("width"))
				}, m, function() {
					a && b.remove()
				});
			else if (e == "auto")
				switch (g) {
				case "left":
					d.animate({
						left : -parseInt(d.css("width"))
					}, m, function() {
						a && b.remove()
					});
					break;
				case "right":
					d.animate({
						left : parseInt(d.css("width"))
					}, m, function() {
						a && b.remove()
					});
					break;
				case "top":
					d.animate({
						top : -parseInt(d.css("height"))
					}, m, function() {
						a && b.remove()
					});
					break;
				case "bottom":
					d.animate({
						top : parseInt(d.css("height"))
					}, m, function() {
						a && b.remove()
					});
					break;
				case "custom":
					d.animate({
						top : parseInt(d.css("height"))
					}, m, function() {
						a && b.remove()
					});
					break;
				case "default":
					d.animate({
						top : parseInt(d.css("height"))
					}, m, function() {
						a && b.remove()
					})
				}
		}
		function ua() {
			var a = w[z].properties.slideshowDelay || c.settings.slideshowDelay;
			c.settings.timerAnimation && Za(a);
			ma = 0;
			na = (new Date).getTime();
			G && clearTimeout(G);
			G = setTimeout(function() {
				if (c.settings.slideshowDirection == "next")
					aa();
				else
					c.settings.slideshowDirection == "previous" && $()
			}, a)
		}
		function ha() {
			G && clearTimeout(G);
			c.settings.timerAnimation && $a()
		}
		function fa() {
			G && clearTimeout(G);
			ma += (new Date).getTime() - na
		}
		function sa() {
			var a = w[z].properties.slideshowDelay || c.settings.slideshowDelay;
			na = (new Date).getTime();
			G && clearTimeout(G);
			G = setTimeout(function() {
				if (c.settings.slideshowDirection == "next")
					aa();
				else
					c.settings.slideshowDirection == "previous" && $()
			}, a - ma)
		}
		function Za(a) {
			var b = document.createElement("canvas"), d = Math.max(
					c.settings.timerStrokeWidth1, c.settings.timerStrokeWidth2)
					+ c.settings.timerRadius * 2, f = d / 2, i = Math.PI / 180, e = 0, g, j, m = c.settings.timerStrokeOpacity1, o = c.settings.timerStrokeOpacity2, s = Y(c.settings.timerStrokeColor1).red, u = Y(c.settings.timerStrokeColor1).green, k = Y(c.settings.timerStrokeColor1).blue, r = Y(c.settings.timerStrokeColor2).red, v = Y(c.settings.timerStrokeColor2).green, t = Y(c.settings.timerStrokeColor2).blue;
			b.width = b.height = d;
			h(b).attr("class", "timer-animation").appendTo(A);
			if (c.settings.fadeTimer && !U)
				h(b).css("opacity", 0);
			else
				h.browser.msie && parseInt(h.browser.version) < 9 || h(b).css({
					opacity : 0
				}).stop().animate({
					opacity : 1
				}, c.settings.timerFadeDuration);
			if (h.browser.msie && parseInt(h.browser.version) < 9)
				b = G_vmlCanvasManager.initElement(b);
			var p = b.getContext("2d");
			p.beginPath();
			p.lineWidth = c.settings.timerStrokeWidth1;
			p.strokeStyle = "rgba(" + s + ", " + u + ", " + k + ", " + m + ")";
			p.arc(f, f, c.settings.timerRadius, 0, 2 * Math.PI, false);
			p.stroke();
			wa = setInterval(
					function() {
						if (e <= 360
								&& !(c.settings.pauseSlideshowOnHover && U || ga)) {
							g = (new Date).getTime();
							j = g - na;
							e = (ma + j) / a * 360 + 1;
							if (e > 360)
								e = 360;
							b.width = b.width;
							p.beginPath();
							p.lineWidth = c.settings.timerStrokeWidth1;
							p.strokeStyle = "rgba(" + s + ", " + u + ", " + k
									+ ", " + m + ")";
							p.arc(f, f, c.settings.timerRadius, 0, 2 * Math.PI,
									false);
							p.stroke();
							p.beginPath();
							p.lineWidth = c.settings.timerStrokeWidth2;
							p.strokeStyle = "rgba(" + r + ", " + v + ", " + t
									+ ", " + o + ")";
							p
									.arc(f, f, c.settings.timerRadius, 0,
											e * i, false);
							p.stroke()
						}
					}, 20)
		}
		function $a() {
			wa && clearInterval(wa);
			var a = n.find(".timer-animation");
			if (a)
				h.browser.msie && parseInt(h.browser.version) < 9 ? a.remove()
						: a.stop().animate({
							opacity : 0
						}, c.settings.timerFadeDuration, function() {
							a.remove()
						})
		}
		function Ia(a, b, d) {
			var f = 0;
			if (a == "centerTop" || a == "centerCenter" || a == "centerBottom"
					|| b < d)
				f = Math.floor((b - d) / 2);
			else if (a == "rightTop" || a == "rightCenter"
					|| a == "rightBottom")
				f = b - d;
			return f
		}
		function Ja(a, b, d) {
			var f = 0;
			if (a == "leftCenter" || a == "centerCenter" || a == "rightCenter"
					|| b < d)
				f = Math.floor((b - d) / 2);
			else if (a == "leftBottom" || a == "centerBottom"
					|| a == "rightBottom")
				f = b - d;
			return f
		}
		function Sa() {
			var a = w.length;
			q = h('<div class="navigation-thumbnails"></div>').appendTo(n);
			x = h('<div class="visible-container"></div>').appendTo(q);
			D = h('<div class="container"></div>').appendTo(x);
			c.settings.thumbnailOrientation == "horizontal" ? q
					.addClass("horizontal") : q.addClass("vertical");
			S = Math.ceil(w.length / c.settings.visibleThumbnails);
			for ( var b = 0; b < a; b++) {
				var d = h('<a class="thumbnail" rel="' + b + '"></a>').css({
					width : c.settings.thumbnailWidth,
					height : c.settings.thumbnailHeight,
					"background-image" : "url(" + w[b].thumbnail + ")"
				}).appendTo(D);
				c.settings.thumbnailOrientation == "horizontal" ? d.css("left",
						b * d.outerWidth(true)) : d.css("top", b
						* d.outerHeight(true));
				if (w[b].thumbnailCaption) {
					var f = h('<div class="caption"></div>').appendTo(d);
					h('<div class="background"></div>').appendTo(f);
					var i = h(
							'<div class="content">' + w[b].thumbnailCaption
									+ "</div>").appendTo(f);
					f.css("height", i.outerHeight(true));
					c.settings.thumbnailCaptionPosition == "top" ? f.css({
						top : 0
					}) : f.css({
						bottom : 0
					});
					if (c.settings.hideThumbnailCaption)
						if (c.settings.thumbnailCaptionEffect == "slide")
							c.settings.thumbnailCaptionPosition == "top" ? f
									.css({
										top : -f.outerHeight(true)
									}) : f.css({
								bottom : -f.outerHeight(true)
							});
						else
							f.hide()
				}
				d
						.hover(
								function() {
									h(this).hasClass("select")
											|| h(this).addClass("over");
									var m = h(this).find(".caption");
									if (m)
										if (c.settings.hideThumbnailCaption)
											if (c.settings.thumbnailCaptionEffect == "slide")
												c.settings.thumbnailCaptionPosition == "top" ? m
														.stop()
														.animate(
																{
																	top : 0
																},
																c.settings.thumbnailCaptionShowDuration)
														: m
																.stop()
																.animate(
																		{
																			bottom : 0
																		},
																		c.settings.thumbnailCaptionShowDuration);
											else
												m
														.stop(false, true)
														.fadeIn(
																c.settings.thumbnailCaptionShowDuration,
																c.settings.thumbnailCaptionEasing);
									c.settings.thumbnailTooltip
											&& ab(parseInt(h(this).attr("rel")))
								},
								function() {
									h(this).hasClass("select")
											|| h(this).removeClass("over");
									var m = h(this).find(".caption");
									if (m)
										if (c.settings.hideThumbnailCaption)
											if (c.settings.thumbnailCaptionEffect == "slide")
												c.settings.thumbnailCaptionPosition == "top" ? m
														.stop()
														.animate(
																{
																	top : -m
																			.outerHeight(true)
																},
																c.settings.thumbnailCaptionHideDuration,
																c.settings.thumbnailCaptionEasing)
														: m
																.stop()
																.animate(
																		{
																			bottom : -m
																					.outerHeight(true)
																		},
																		c.settings.thumbnailCaptionHideDuration,
																		c.settings.thumbnailCaptionEasing);
											else
												m
														.stop(false, true)
														.fadeOut(
																c.settings.thumbnailCaptionHideDuration,
																c.settings.thumbnailCaptionEasing);
									c.settings.thumbnailTooltip && bb()
								});
				d.click(function() {
					Q(parseInt(h(this).attr("rel")))
				})
			}
			b = q.find(".thumbnail").outerWidth(true);
			d = q.find(".thumbnail").outerHeight(true);
			if (c.settings.thumbnailOrientation == "horizontal") {
				q.css({
					width : b * Math.min(a, c.settings.visibleThumbnails),
					height : d,
					top : A.outerHeight(true)
				});
				x.css({
					width : b * Math.min(a, c.settings.visibleThumbnails),
					height : d
				});
				H = w.length * b
			} else {
				q.css({
					width : b,
					height : d * Math.min(a, c.settings.visibleThumbnails),
					left : A.outerWidth(true)
				});
				x.css({
					width : b,
					height : d * Math.min(a, c.settings.visibleThumbnails)
				});
				H = w.length * d
			}
			if (c.settings.fadeNavigationThumbnails) {
				q.css({
					opacity : 0
				});
				q.hover(function() {
					h.browser.msie && parseInt(h.browser.version) < 9 ? q.css(
							"filter", "") : q.stop().animate({
						opacity : 1
					}, c.settings.navigationThumbnailsShowDuration)
				}, function() {
					h.browser.msie && parseInt(h.browser.version) < 9 ? q.css(
							"opacity", 0) : q.stop().animate({
						opacity : 0
					}, c.settings.navigationThumbnailsHideDuration)
				})
			}
			if (c.settings.visibleThumbnails < a) {
				if (c.settings.thumbnailArrows) {
					var e = h('<div class="arrows"></div>').appendTo(q);
					f = h('<a class="previous"></a>').click(function() {
						if (J > 0) {
							J--;
							V(J)
						} else
							V(S - 1)
					}).appendTo(e);
					i = h('<a class="next"></a>').click(function() {
						if (J < S - 1) {
							J++;
							V(J)
						} else
							V(0)
					}).appendTo(e);
					if (c.settings.thumbnailOrientation == "horizontal") {
						q.css("width", b
								* Math.min(a, c.settings.visibleThumbnails)
								+ f.outerWidth(true) + i.outerWidth(true));
						x.css("left", Math.round((q.outerWidth() - x
								.outerWidth()) / 2));
						f
								.css({
									top : Math.round((q.outerHeight() - f
											.outerHeight()) / 2)
								});
						i
								.css({
									top : Math.round((q.outerHeight() - i
											.outerHeight()) / 2)
								})
					} else {
						q.css("height", d
								* Math.min(a, c.settings.visibleThumbnails)
								+ f.outerHeight(true) + i.outerHeight(true));
						x.css("top", Math.round((q.outerHeight() - x
								.outerHeight()) / 2));
						f
								.css({
									left : Math.round((q.outerWidth() - f
											.outerWidth()) / 2)
								});
						i
								.css({
									left : Math.round((q.outerWidth() - i
											.outerWidth()) / 2)
								})
					}
					if (c.settings.fadeThumbnailArrows) {
						h.browser.msie ? e.hide() : e.css("opacity", 0);
						q.hover(function() {
							h.browser.msie ? e.show() : e.stop().animate({
								opacity : 1
							}, c.settings.thumbnailArrowsShowDuration)
						}, function() {
							h.browser.msie ? e.hide() : e.stop().animate({
								opacity : 0
							}, c.settings.thumbnailArrowsHideDuration)
						})
					}
				}
				if (c.settings.thumbnailButtons) {
					var g = h('<div class="buttons"></div>').appendTo(q), j;
					for (b = 0; b < S; b++) {
						a = h('<a rel="' + b + '"></a>').appendTo(g);
						if (c.settings.thumbnailOrientation == "horizontal") {
							j = a.outerWidth(true);
							a.css({
								left : b * j
							})
						} else {
							j = a.outerHeight(true);
							a.css({
								top : b * j
							})
						}
						a.bind({
							mouseover : function() {
								h(this).hasClass("select")
										|| h(this).addClass("over")
							},
							mouseout : function() {
								h(this).hasClass("select")
										|| h(this).removeClass("over")
							},
							click : function() {
								var m = parseInt(h(this).attr("rel"));
								V(m)
							}
						})
					}
					a = {};
					b = {};
					if (c.settings.thumbnailOrientation == "horizontal") {
						b.width = j * S;
						b.height = j
					} else {
						b.height = j * S;
						b.width = j
					}
					g.css(b);
					if (c.settings.thumbnailOrientation == "horizontal") {
						q.css("height", x.outerHeight() + g.outerHeight(true));
						a.left = (q.outerWidth() - g.outerWidth()) / 2;
						a.top = x.outerHeight()
					} else {
						q.css("width", x.outerWidth() + g.outerWidth(true));
						a.top = (q.outerHeight() - g.outerHeight()) / 2;
						a.left = x.outerWidth()
					}
					g.css(a);
					if (c.settings.fadeThumbnailButtons) {
						h.browser.msie && parseInt(h.browser.version) < 9 ? g
								.hide() : g.css("opacity", 0);
						q
								.hover(
										function() {
											h.browser.msie
													&& parseInt(h.browser.version) < 9 ? g
													.show()
													: g
															.stop()
															.animate(
																	{
																		opacity : 1
																	},
																	c.settings.thumbnailButtonsShowDuration)
										},
										function() {
											h.browser.msie
													&& parseInt(h.browser.version) < 9 ? g
													.hide()
													: g
															.stop()
															.animate(
																	{
																		opacity : 0
																	},
																	c.settings.thumbnailButtonsShowDuration)
										})
					}
					g.find("a").eq(0).addClass("select")
				}
			}
			if (c.settings.navigationThumbnailsCenter) {
				j = {};
				if (c.settings.thumbnailOrientation == "horizontal")
					j.left = (A.outerWidth(true) - q.outerWidth(true)) / 2;
				else
					j.top = (A.outerHeight(true) - q.outerHeight(true)) / 2;
				q.css(j)
			}
			c.settings.thumbnailTooltip
					&& h(
							'<div class="tooltip"><div class="content"></div></div>')
							.hide().appendTo(q);
			if (c.settings.thumbnailMouseScroll || c.settings.thumbnailTooltip
					|| c.settings.thumbnailScrollbar)
				h(document).bind("mousemove", function(m) {
					O = m.pageX;
					P = m.pageY
				});
			c.settings.thumbnailScrollbar && cb();
			c.settings.thumbnailMouseScroll && Ma();
			c.settings.thumbnailMouseWheel && db();
			if (c.settings.thumbnailOrientation == "horizontal") {
				j = parseInt(q.css("top")) + q.outerHeight(true);
				j = n.outerHeight() < j ? j - n.outerHeight() : 0;
				n.css("height", n.outerHeight() + j)
			} else {
				j = parseInt(q.css("left")) + q.outerWidth(true);
				j = n.outerWidth() < j ? j - n.outerWidth() : 0;
				n.css("width", n.outerWidth() + j)
			}
		}
		function ab(a) {
			if (a = w[a].thumbnailTooltip) {
				var b = n.find(".tooltip");
				b.find(".content").html(a);
				b.stop(false, true).fadeIn(c.settings.tooltipShowDuration);
				var d = -b.outerWidth() / 2, f = 0 - b.outerHeight()
						- parseInt(b.css("marginBottom"));
				b.css({
					left : O - q.offset().left + d,
					top : P - q.offset().top + f
				});
				h(document).bind("mousemove.tooltip", function() {
					b.css({
						left : O - q.offset().left + d,
						top : P - q.offset().top + f
					})
				})
			}
		}
		function bb() {
			var a = n.find(".tooltip");
			a
					&& a.stop(false, true).fadeOut(
							c.settings.tooltipHideDuration, function() {
								h(document).unbind("mousemove.tooltip");
								a.css("left", -9999)
							})
		}
		function V(a) {
			var b = c.settings.thumbnailOrientation == "horizontal" ? x
					.outerWidth() : x.outerHeight(), d = a * b;
			J = a;
			if (J == S - 1)
				d = H - b;
			xa();
			D.animate(c.settings.thumbnailOrientation == "horizontal" ? {
				left : -d
			} : {
				top : -d
			}, {
				duration : c.settings.thumbnailScrollDuration,
				easing : c.settings.thumbnailScrollEasing,
				step : function() {
					oa()
				},
				complete : function() {
					ya()
				}
			});
			if (c.settings.thumbnailButtons) {
				b = q.find(".buttons");
				b.find(".select").removeClass("select");
				b.find("a").eq(a).removeClass("over").addClass("select")
			}
		}
		function Ma() {
			c.settings.thumbnailMouseScroll = true;
			var a = 0, b = false, d = x.offset().top, f = x.offset().left, i = x
					.outerWidth(true), e = x.outerHeight(true), g = c.settings.thumbnailOrientation == "horizontal" ? i
					: e, j = c.settings.thumbnailOrientation == "horizontal" ? f
					: d, m = c.settings.thumbnailOrientation == "horizontal" ? "left"
					: "top", o = parseInt(D.css(m));
			za = setInterval(
					function() {
						if (!b) {
							b = true;
							d = x.offset().top;
							f = x.offset().left;
							i = x.outerWidth(true);
							e = x.outerHeight(true)
						}
						if (O > f && O < f + i && P > d && P < d + e) {
							a = Math
									.round((-((H - g + 200) * (((c.settings.thumbnailOrientation == "horizontal" ? O
											: P) - j) / g)) + 100 - o)
											* c.settings.thumbnailMouseScrollSpeed
											/ 100);
							o += a
						} else if (Math.abs(a) > 0.1) {
							a *= c.settings.thumbnailMouseScrollEase / 100;
							o += a
						} else
							a = 0;
						if (Math.abs(a) > 0) {
							if (o >= 0)
								o = 0;
							else if (o <= g - H)
								o = g - H;
							oa();
							D.css(m, o)
						}
					}, 30)
		}
		function db() {
			c.settings.thumbnailMouseWheel = true;
			var a = 0, b = c.settings.thumbnailMouseWheelReverse ? -1 : 1, d, f = c.settings.thumbnailOrientation == "horizontal" ? "left"
					: "top", i = c.settings.thumbnailOrientation == "horizontal" ? x
					.outerWidth(true)
					: x.outerHeight(true);
			x
					.bind(
							"mousewheel",
							function(e, g) {
								e.preventDefault();
								if (!Aa) {
									xa();
									Aa = true;
									a = d = parseInt(D.css(f));
									Ba = setInterval(
											function() {
												if (Math.abs(a - d) > 0.5) {
													d += (a - d)
															* (c.settings.thumbnailMouseWheelSpeed / 100);
													oa();
													D.css(f, d)
												} else
													ya()
											}, 30)
								}
								a += b * g * 10;
								if (a >= 0)
									a = 0;
								else if (a <= i - H)
									a = i - H
							})
		}
		function cb() {
			function a() {
				j = (c.settings.thumbnailOrientation == "horizontal" ? O : P)
						- f.offset()[k] - m;
				b()
			}
			function b() {
				if (j < 0)
					j = 0;
				else if (j > parseInt(f.css(u)) - parseInt(i.css(u)))
					j = parseInt(f.css(u)) - parseInt(i.css(u));
				ea && i.css(k, j);
				o = j / (parseInt(f.css(u)) - parseInt(i.css(u)));
				if (!pa) {
					xa();
					pa = true;
					s = parseInt(D.css(k));
					Ca = setInterval(function() {
						if (Math.abs(Na() + o) > 0.0010) {
							var r = (-o * (H - parseInt(x.css(u))) - s)
									* c.settings.thumbnailScrollbarEase / 100;
							s += r;
							oa();
							D.css(k, s)
						} else
							pa && ya()
					}, 30)
				}
			}
			var d = h('<div class="scrollbar"></div>').appendTo(q), f = h(
					'<div class="track"></div>').appendTo(d);
			h('<div class="track-middle"></div>').appendTo(f);
			h('<div class="track-back"></div>').appendTo(f);
			h('<div class="track-forward"></div>').appendTo(f);
			var i = h('<div class="thumb"></div>').appendTo(f);
			h('<div class="thumb-middle"></div>').appendTo(i);
			h('<div class="thumb-back"></div>').appendTo(i);
			h('<div class="thumb-forward"></div>').appendTo(i);
			var e = h('<div class="back"></div>').appendTo(d), g = h(
					'<div class="forward"></div>').appendTo(d), j = 0, m, o = 0, s = 0, u = c.settings.thumbnailOrientation == "horizontal" ? "width"
					: "height", k = c.settings.thumbnailOrientation == "horizontal" ? "left"
					: "top";
			d.addClass(c.settings.scrollbarSkin);
			if (c.settings.thumbnailOrientation == "horizontal") {
				d.addClass("horizontal");
				d.css({
					top : x.outerHeight(),
					left : (q.outerWidth() - parseInt(d.css("width"))) / 2
				});
				q.css("height", x.outerHeight() + d.outerHeight(true))
			} else {
				d.addClass("vertical");
				d.css({
					left : x.outerWidth(),
					top : (q.outerHeight() - parseInt(d.css("height"))) / 2
				});
				q.css("width", x.outerWidth() + d.outerWidth(true))
			}
			if (c.settings.fadeThumbnailScrollbar) {
				h.browser.msie && parseInt(h.browser.version) < 9 ? d.hide()
						: d.css("opacity", 0);
				q.hover(function() {
					h.browser.msie && parseInt(h.browser.version) < 9 ? d
							.show() : d.stop().animate({
						opacity : 1
					}, c.settings.thumbnailScrollbarShowDuration)
				}, function() {
					h.browser.msie && parseInt(h.browser.version) < 9 ? d
							.hide() : d.stop().animate({
						opacity : 0
					}, c.settings.thumbnailScrollbarShowDuration)
				})
			}
			i.bind("mousedown", function(r) {
				r.preventDefault();
				m = (c.settings.thumbnailOrientation == "horizontal" ? O : P)
						- i.offset()[k];
				ea = true;
				h(document).bind("mousemove", a)
			});
			h(document).bind("mouseup", function() {
				if (ea) {
					ea = false;
					h(document).unbind("mousemove", a)
				}
			});
			e.bind("click", function() {
				j = parseInt(i.css(k)) - c.settings.scrollbarArrowScrollAmount;
				b()
			});
			g.bind("click", function() {
				j = parseInt(i.css(k)) + c.settings.scrollbarArrowScrollAmount;
				b()
			})
		}
		function Na() {
			var a = c.settings.thumbnailOrientation == "horizontal" ? "width"
					: "height";
			return parseFloat(D
					.css(c.settings.thumbnailOrientation == "horizontal" ? "left"
							: "top"))
					/ (H - parseInt(x.css(a)))
		}
		function Da() {
			za && clearInterval(za);
			if (Ba) {
				Aa = false;
				clearInterval(Ba)
			}
			if (Ca) {
				pa = false;
				clearInterval(Ca)
			}
		}
		function xa() {
			Da();
			D && D.is(":animated") && D.stop()
		}
		function ya() {
			Da();
			c.settings.thumbnailMouseScroll && Ma()
		}
		function oa() {
			if (c.settings.thumbnailScrollbar && !ea) {
				var a = n.find(".track"), b = a.find(".thumb");
				positionProp = c.settings.thumbnailOrientation == "horizontal" ? "left"
						: "top";
				sizeProp = c.settings.thumbnailOrientation == "horizontal" ? "width"
						: "height";
				value = -Na()
						* (parseInt(a.css(sizeProp)) - parseInt(b.css(sizeProp)));
				value > 0 && b.css(positionProp, value)
			}
		}
		function Wa(a, b, d, f) {
			var i = [], e, g, j = 0;
			switch (b) {
			case "randomPattern":
				for (d = []; a.length;) {
					j = Math.floor(Math.random() * a.length);
					d.push(a[j]);
					a.splice(j, 1)
				}
				var m = d.length;
				for (b = 0; b < m; b++)
					i[b] = d[b];
				break;
			case "topToBottom":
				for (g = 0; g < f; g++)
					for (e = 0; e < d; e++)
						i.push(l(a, e, g));
				break;
			case "bottomToTop":
				for (g = f - 1; g >= 0; g--)
					for (e = d - 1; e >= 0; e--)
						i.push(l(a, e, g));
				break;
			case "rightToLeft":
				for (e = d - 1; e >= 0; e--)
					for (g = f - 1; g >= 0; g--)
						i.push(l(a, e, g));
				break;
			case "leftToRight":
				for (e = 0; e < d; e++)
					for (g = 0; g < f; g++)
						i.push(l(a, e, g));
				break;
			case "topLeftToBottomRight":
				for (b = 0; b < d + f - 1; b++) {
					g = 0;
					for (e = b; e >= 0; e--) {
						l(a, e, g) != undefined && i.push(l(a, e, g));
						g++
					}
				}
				break;
			case "bottomLeftToTopRight":
				j = d > f ? d : f;
				for (b = d - 1; b >= 1 - j; b--) {
					e = 0;
					for (g = b; g <= d - 1; g++) {
						l(a, e, g) != undefined && i.push(l(a, e, g));
						e++
					}
				}
				break;
			case "topRightToBottomLeft":
				j = d > f ? d : f;
				for (b = d - 1; b >= 1 - j; b--) {
					e = b;
					for (g = 0; g <= f - 1; g++) {
						l(a, e, g) != undefined && i.push(l(a, e, g));
						e++
					}
				}
				break;
			case "bottomRightToTopLeft":
				for (b = f + d - 2; b >= 0; b--) {
					g = 0;
					for (e = b; e >= 0; e--) {
						l(a, e, g) != undefined && i.push(l(a, e, g));
						g++
					}
				}
				break;
			case "horizontalMarginToCenter":
				if (d % 2) {
					for (e = 0; e < Math.floor(d / 2); e++)
						for (g = 0; g < f; g++) {
							i.push(l(a, e, g));
							i.push(l(a, d - 1 - e, g))
						}
					for (b = 0; b < f; b++)
						i.push(l(a, Math.floor(d / 2), b))
				} else
					for (e = 0; e < Math.floor(d / 2); e++)
						for (g = 0; g < f; g++) {
							i.push(l(a, e, g));
							i.push(l(a, d - 1 - e, g))
						}
				break;
			case "horizontalCenterToMargin":
				if (d % 2)
					for (b = 0; b < f; b++)
						i.push(l(a, Math.floor(d / 2), b));
				for (e = Math.floor(d / 2) - 1; e >= 0; e--)
					for (g = 0; g < f; g++) {
						i.push(l(a, e, g));
						i.push(l(a, d - 1 - e, g))
					}
				break;
			case "verticalMarginToCenter":
				if (f % 2) {
					for (g = 0; g < Math.floor(f / 2); g++)
						for (e = 0; e < d; e++) {
							i.push(l(a, e, g));
							i.push(l(a, e, f - 1 - g))
						}
					for (b = 0; b < d; b++)
						i.push(l(a, b, Math.floor(f / 2)))
				} else
					for (g = 0; g < Math.floor(f / 2); g++)
						for (e = 0; e < d; e++) {
							i.push(l(a, e, g));
							i.push(l(a, e, f - 1 - g))
						}
				break;
			case "verticalCenterToMargin":
				if (f % 2)
					for (b = 0; b < d; b++)
						i.push(l(a, b, Math.floor(f / 2)));
				for (g = Math.floor(f / 2) - 1; g >= 0; g--)
					for (e = 0; e < d; e++) {
						i.push(l(a, e, g));
						i.push(l(a, e, f - 1 - g))
					}
				break;
			case "skipOneTopToBottom":
				for (g = 0; g < f; g++) {
					for (e = j; e < d; e += 2)
						i.push(l(a, e, g));
					j == 0 ? j = 1 : j = 0
				}
				j = 1;
				for (g = 0; g < f; g++) {
					for (e = j; e < d; e += 2)
						i.push(l(a, e, g));
					j == 0 ? j = 1 : j = 0
				}
				break;
			case "skipOneBottomToTop":
				for (g = f - 1; g >= 0; g--) {
					for (e = j; e < d; e += 2)
						i.push(l(a, e, g));
					j == 0 ? j = 1 : j = 0
				}
				j = 1;
				for (g = f - 1; g >= 0; g--) {
					for (e = j; e < d; e += 2)
						i.push(l(a, e, g));
					j == 0 ? j = 1 : j = 0
				}
				break;
			case "skipOneLeftToRight":
				for (e = 0; e < d; e++) {
					for (g = j; g < f; g += 2)
						i.push(l(a, e, g));
					j == 0 ? j = 1 : j = 0
				}
				j = 1;
				for (e = 0; e < d; e++) {
					for (g = j; g < f; g += 2)
						i.push(l(a, e, g));
					j == 0 ? j = 1 : j = 0
				}
				break;
			case "skipOneRightToLeft":
				for (e = d - 1; e >= 0; e--) {
					for (g = j; g < f; g += 2)
						i.push(l(a, e, g));
					j == 0 ? j = 1 : j = 0
				}
				j = 1;
				for (e = d - 1; e >= 0; e--) {
					for (g = j; g < f; g += 2)
						i.push(l(a, e, g));
					j == 0 ? j = 1 : j = 0
				}
				break;
			case "skipOneVertical":
				if (f % 2)
					for (g = 0; g < f; g++) {
						for (e = j; e < d; e += 2) {
							if (g == Math.floor(f / 2)) {
								g++;
								for (b = 1 - d % 2; b < d; b += 2) {
									i.push(l(a, b, Math.floor(f / 2)));
									l(a, b - 1, Math.floor(f / 2)) != undefined
											&& i.push(l(a, b - 1, Math
													.floor(f / 2)))
								}
							}
							i.push(l(a, e, g));
							i.push(l(a, e, f - g - 1))
						}
						j == 0 ? j = 1 : j = 0
					}
				else
					for (g = 0; g < f; g++) {
						for (e = j; e < d; e += 2) {
							i.push(l(a, e, g));
							i.push(l(a, e, f - g - 1))
						}
						j == 0 ? j = 1 : j = 0
					}
				break;
			case "skipOneHorizontal":
				if (d % 2)
					for (e = 0; e < d; e++) {
						for (g = j; g < f; g += 2) {
							if (e == Math.floor(d / 2)) {
								e++;
								for (b = 1 - f % 2; b < f; b += 2) {
									i.push(l(a, Math.floor(d / 2), b));
									l(a, Math.floor(d / 2), b - 1) != undefined
											&& i.push(l(a, Math.floor(d / 2),
													b - 1))
								}
							}
							i.push(l(a, e, g));
							i.push(l(a, d - 1 - e, g))
						}
						j == 0 ? j = 1 : j = 0
					}
				else
					for (e = 0; e < d; e++) {
						for (g = j; g < f; g += 2) {
							i.push(l(a, e, g));
							i.push(l(a, d - 1 - e, g))
						}
						j == 0 ? j = 1 : j = 0
					}
				break;
			case "spiralMarginToCenterCW":
				var o = d, s = f, u, k = 0, r = f < d ? f : d;
				m = Math.floor(r / 2);
				for (u = 0; u < m; u++) {
					for (e = k++; e < o; e++)
						i.push(l(a, e, k - 1));
					o--;
					for (g = k; g < s; g++)
						i.push(l(a, d - k, g));
					s--;
					for (b = o; b >= d - o; b--)
						i.push(l(a, b - 1, s));
					for (j = s - 1; j >= f - s; j--)
						i.push(l(a, k - 1, j))
				}
				if (r % 2) {
					if (r == f)
						for (e = k++; e < o; e++)
							i.push(l(a, e, k - 1));
					if (r == d)
						for (g = k++; g < s; g++)
							i.push(l(a, d - k, g))
				}
				break;
			case "spiralMarginToCenterCCW":
				o = d;
				s = f;
				k = 0;
				r = f < d ? f : d;
				m = Math.floor(r / 2);
				for (u = 0; u < m; u++) {
					for (g = k++; g < s; g++)
						i.push(l(a, k - 1, g));
					s--;
					for (e = k; e < o; e++)
						i.push(l(a, e, f - k));
					o--;
					for (b = s; b >= f - s; b--)
						i.push(l(a, o, b - 1));
					for (j = o - 1; j >= d - o; j--)
						i.push(l(a, j, k - 1))
				}
				if (r % 2) {
					if (r == f)
						for (e = k++; e < o; e++)
							i.push(l(a, e, f - k));
					if (r == d)
						for (g = k++; g < s; g++)
							i.push(l(a, k - 1, g))
				}
				break;
			case "spiralCenterToMarginCCW":
				o = d;
				s = f;
				k = 0;
				r = f < d ? f : d;
				m = Math.floor(r / 2);
				for (u = 0; u < m; u++) {
					for (e = k++; e < o; e++)
						i.push(l(a, e, k - 1));
					o--;
					for (g = k; g < s; g++)
						i.push(l(a, d - k, g));
					s--;
					for (b = o; b >= d - o; b--)
						i.push(l(a, b - 1, s));
					for (j = s - 1; j >= f - s; j--)
						i.push(l(a, k - 1, j))
				}
				if (r % 2) {
					if (r == f)
						for (e = k++; e < o; e++)
							i.push(l(a, e, k - 1));
					if (r == d)
						for (g = k++; g < s; g++)
							i.push(l(a, d - k, g))
				}
				i.reverse();
				break;
			case "spiralCenterToMarginCW":
				o = d;
				s = f;
				k = 0;
				r = f < d ? f : d;
				m = Math.floor(r / 2);
				for (u = 0; u < m; u++) {
					for (g = k++; g < s; g++)
						i.push(l(a, k - 1, g));
					s--;
					for (e = k; e < o; e++)
						i.push(l(a, e, f - k));
					o--;
					for (b = s; b >= f - s; b--)
						i.push(l(a, o, b - 1));
					for (j = o - 1; j >= d - o; j--)
						i.push(l(a, j, k - 1))
				}
				if (r % 2) {
					if (r == f)
						for (e = k++; e < o; e++)
							i.push(l(a, e, f - k));
					if (r == d)
						for (g = k++; g < s; g++)
							i.push(l(a, k - 1, g))
				}
				i.reverse();
				break;
			default:
				for (d = []; a.length;) {
					j = Math.floor(Math.random() * a.length);
					d.push(a[j]);
					a.splice(j, 1)
				}
				m = d.length;
				for (b = 0; b < m; b++)
					i[b] = d[b]
			}
			return i
		}
		function l(a, b, d) {
			return h.grep(a, function(f) {
				return f.data("hPos") == b && f.data("vPos") == d
			})[0]
		}
		function Y(a) {
			var b = parseInt(a.substring(1, 3), 16), d = parseInt(a.substring(
					3, 5), 16);
			a = parseInt(a.substring(5, 7), 16);
			return {
				red : b,
				green : d,
				blue : a
			}
		}
		var n = h(ra), c = this, z = -1, L = -1, w = [], ja, B = null, N = null, E = false, U = false, ga = false, Z = false, G = 0, wa = 0, J = 0, S = 0, C = "", ma = 0, na = 0, za, Ba, Aa = false, Ca, ea = false, pa = false, O, P, H, q, x, D, X = [], ka = [], la = [], A, qa = [
				"htmlDuringTransition", "alignType", "effectType",
				"sliceDelay", "sliceDuration", "sliceEasing",
				"horizontalSlices", "verticalSlices", "slicePattern",
				"slicePoint", "slideStartPosition", "slideStartRatio",
				"sliceFade", "captionSize", "captionPosition",
				"captionShowEffectDuration", "captionShowEffectEasing",
				"captionHideEffectDuration", "captionHideEffectEasing",
				"captionShowEffect", "captionHideEffect", "captionLeft",
				"captionTop", "captionWidth", "captionHeight",
				"captionShowSlideDirection", "captionHideSlideDirection",
				"captionBackgroundColor", "captionBackgroundOpacity",
				"slideshowDelay", "slideMask", "linkTarget",
				"simpleSlideDirection", "simpleSlideDuration",
				"simpleSlideEasing", "lightboxDefaultWidth",
				"lightboxDefaultHeight", "lightboxTheme", "lightboxOpacity",
				"fadePreviousSlide", "fadePreviousSlideDuration" ];
		this.settings = h.extend({}, h.fn.advancedSlider.defaults, T);
		(function() {
			if (c.settings.xmlSource) {
				ja = true;
				n.empty();
				h
						.ajax({
							type : "GET",
							url : c.settings.xmlSource,
							dataType : h.browser.msie ? "text" : "xml",
							success : function(a) {
								var b;
								if (h.browser.msie) {
									b = new ActiveXObject("Microsoft.XMLDOM");
									b.async = false;
									b.loadXML(a)
								} else
									b = a;
								h(b)
										.find("slide")
										.each(
												function() {
													var d = {};
													d.properties = {};
													for ( var f = 0; f < h(this)
															.children().length; f++) {
														var i = h(this)
																.children()[f];
														if (i.nodeName == "lightboxContent") {
															X
																	.push(h(
																			this)
																			.find(
																					"lightboxContent")
																			.text());
															ka
																	.push(h(
																			this)
																			.find(
																					"lightboxTitle")
																			.text()
																			|| "");
															la
																	.push(h(
																			this)
																			.find(
																					"lightboxDescription")
																			.text()
																			|| "");
															d.lightbox = {
																lightbox_index : X.length - 1
															}
														}
														if (i.nodeName != "lightboxContent"
																&& i.nodeName != "lightboxTitle"
																&& i.nodeName != "lightboxDescription")
															d[i.nodeName] = h(
																	this).find(
																	i.nodeName)
																	.text()
													}
													for (f = 0; f < qa.length; f++) {
														i = qa[f];
														var e = h(this).attr(i);
														d.properties[i] = e == undefined ? c.settings[i]
																: e
													}
													w.push(d)
												});
								I()
							}
						})
			} else {
				n
						.children()
						.each(
								function(a) {
									var b = {};
									b.properties = {};
									for ( var d = 0; d < h(this).children().length; d++) {
										var f = h(this).children()[d];
										if (h(f).is("a"))
											if (h(f).hasClass("lightbox")) {
												X.push(h(f).attr("href"));
												ka.push(h(f).html() || "");
												la.push(h(f).attr("title")
														|| "");
												b.lightbox = {
													lightbox_index : X.length - 1
												}
											} else {
												b.path = h(f).find("img").attr(
														"src");
												b.link = h(f).attr("href");
												if (h(f).attr("target"))
													b.properties.linkTarget = h(
															f).attr("target")
											}
										else if (h(f).is("img"))
											if (h(f).hasClass("thumbnail")) {
												b.thumbnail = h(f).attr("src");
												if (h(f).attr("title"))
													b.thumbnailCaption = h(f)
															.attr("title")
											} else
												b.path = h(f).attr("src");
										else if (h(f).hasClass("html"))
											b.html = h(f);
										else
											b[h(f).attr("class")] = h(f).html()
									}
									for (d = 0; d < qa.length; d++) {
										f = qa[d];
										var i;
										if (c.settings.slideProperties)
											if (c.settings.slideProperties[a])
												i = c.settings.slideProperties[a][f];
										b.properties[f]
												|| (b.properties[f] = i == undefined ? c.settings[f]
														: i)
									}
									w.push(b)
								});
				n.empty();
				I()
			}
		})();
		this.nextSlide = aa;
		this.previousSlide = $;
		this.gotoSlide = Q;
		this.startSlideshow = function() {
			n.find(".slideshow-controls").removeClass("play").addClass("pause");
			C = "play";
			ua()
		};
		this.stopSlideshow = function() {
			n.find(".slideshow-controls").removeClass("pause").addClass("play");
			C = "stop";
			ha()
		};
		this.getSlideshowState = function() {
			return C
		};
		this.pauseSlideshow = function() {
			c.settings.slideshow && C != "stop" && !E && fa()
		};
		this.resumeSlideshow = function() {
			c.settings.slideshow && C != "stop" && !E && sa()
		};
		this.getCurrentIndex = function() {
			return z
		};
		this.getSlideAt = function(a) {
			return w[a]
		};
		this.isTransition = function() {
			return E
		};
		this.totalSlides = function() {
			return w.length
		};
		this.destroy = function() {
			this.stopSlideshow();
			Da();
			h(document).unbind("mousemove");
			h(document).unbind("mousemove.tooltip")
		}
	}
	h.fn.advancedSlider = function(ra) {
		for ( var T = [], I = 0; I < this.length; I++) {
			if (!this[I].slider)
				this[I].slider = new Oa(this[I], ra);
			T.push(this[I].slider)
		}
		return T.length > 1 ? T : T[0]
	};
	h.fn.advancedSlider.defaults = {
		xmlSource : null,
		width : 500,
		height : 300,
		skin : "pixel",
		scrollbarSkin : "scrollbar-1",
		alignType : "leftTop",
		skipBroken : true,
		slideshow : true,
		slideshowDelay : 5E3,
		slideshowDirection : "next",
		slideshowControls : true,
		fadeSlideshowControls : true,
		slideshowControlsShowDuration : 500,
		slideshowControlsHideDuration : 500,
		pauseSlideshowOnHover : false,
		lightbox : false,
		lightboxDefaultWidth : 500,
		lightboxDefaultHeight : 300,
		lightboxTheme : "pp_default",
		lightboxOpacity : 0.8,
		lightboxNavigation : true,
		fadePreviousSlide : false,
		fadePreviousSlideDuration : 300,
		overrideTransition : false,
		shadow : true,
		timerAnimation : true,
		timerFadeDuration : 500,
		fadeTimer : false,
		timerRadius : 18,
		timerStrokeColor1 : "#000000",
		timerStrokeColor2 : "#FFFFFF",
		timerStrokeOpacity1 : 0.5,
		timerStrokeOpacity2 : 0.7,
		timerStrokeWidth1 : 8,
		timerStrokeWidth2 : 4,
		slideStart : 0,
		slidesPreloaded : 0,
		shuffle : false,
		htmlDuringTransition : true,
		effectType : "random",
		simpleSlideDirection : "autoHorizontal",
		simpleSlideDuration : 700,
		simpleSlideEasing : "swing",
		sliceDelay : 50,
		sliceDuration : 1E3,
		sliceEasing : "swing",
		horizontalSlices : 5,
		verticalSlices : 3,
		slicePattern : "random",
		slicePoint : "centerCenter",
		slideStartPosition : "left",
		slideStartRatio : 1,
		sliceFade : true,
		navigationArrows : true,
		fadeNavigationArrows : true,
		navigationArrowsShowDuration : 500,
		navigationArrowsHideDuration : 500,
		navigationButtons : true,
		navigationButtonsNumbers : false,
		fadeNavigationButtons : false,
		navigationButtonsShowDuration : 500,
		navigationButtonsHideDuration : 500,
		navigationButtonsCenter : true,
		navigationButtonsContainerCenter : true,
		thumbnailsType : "tooltip",
		thumbnailWidth : 80,
		thumbnailHeight : 50,
		thumbnailSlideAmount : 10,
		thumbnailSlideDuration : 300,
		thumbnailSlideEasing : "swing",
		fadeNavigationThumbnails : false,
		navigationThumbnailsCenter : true,
		thumbnailScrollDuration : 1E3,
		thumbnailScrollEasing : "swing",
		visibleThumbnails : 5,
		thumbnailOrientation : "horizontal",
		thumbnailTooltip : false,
		tooltipShowDuration : 300,
		tooltipHideDuration : 300,
		thumbnailCaptionPosition : "bottom",
		hideThumbnailCaption : true,
		thumbnailCaptionEffect : "slide",
		thumbnailCaptionShowDuration : 500,
		thumbnailCaptionHideDuration : 500,
		thumbnailCaptionEasing : "swing",
		thumbnailScrollbar : false,
		thumbnailButtons : false,
		thumbnailArrows : true,
		fadeThumbnailButtons : false,
		fadeThumbnailArrows : false,
		fadeThumbnailScrollbar : false,
		scrollbarArrowScrollAmount : 100,
		navigationThumbnailsHideDuration : 500,
		navigationThumbnailsShowDuration : 500,
		thumbnailArrowsHideDuration : 500,
		thumbnailArrowsShowDuration : 500,
		thumbnailButtonsHideDuration : 500,
		thumbnailButtonsShowDuration : 500,
		thumbnailScrollbarHideDuration : 500,
		thumbnailScrollbarShowDuration : 500,
		thumbnailSync : false,
		thumbnailMouseScroll : false,
		thumbnailMouseScrollEase : 90,
		thumbnailMouseScrollSpeed : 10,
		thumbnailMouseWheel : false,
		thumbnailMouseWheelSpeed : 20,
		thumbnailMouseWheelReverse : false,
		thumbnailScrollbarEase : 10,
		hideCaption : false,
		captionSize : 70,
		captionBackgroundOpacity : 0.5,
		captionBackgroundColor : "#000000",
		captionShowEffect : "slide",
		captionShowEffectDuration : 500,
		captionShowEffectEasing : "swing",
		captionShowSlideDirection : "auto",
		captionHideEffect : "fade",
		captionHideEffectDuration : 300,
		captionHideEffectEasing : "swing",
		captionHideSlideDirection : "auto",
		captionPosition : "bottom",
		captionLeft : 50,
		captionTop : 50,
		captionWidth : 300,
		captionHeight : 100,
		slideProperties : null,
		slideMask : false,
		linkTarget : "_blank",
		slideOpen : null,
		slideClick : null,
		slideMouseOver : null,
		slideMouseOut : null,
		transitionStart : null,
		transitionComplete : null
	}
})(jQuery);