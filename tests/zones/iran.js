"use strict";

var helpers = require("../helpers/helpers");

exports["Iran"] = {

	"guess:by:offset" : helpers.makeTestGuess("Iran", { offset: true, expect: "Asia/Tehran" }),

	"guess:by:abbr" : helpers.makeTestGuess("Iran", { abbr: true, expect: "Asia/Tehran" }),

	"1915" : helpers.makeTestYear("Iran", [
		["1915-12-31T20:34:15+00:00", "23:59:59", "LMT", -12344 / 60],
		["1915-12-31T20:34:16+00:00", "00:00:00", "TMT", -12344 / 60]
	]),

	"1935" : helpers.makeTestYear("Iran", [
		["1935-06-12T20:34:15+00:00", "23:59:59", "TMT", -12344 / 60],
		["1935-06-12T20:34:16+00:00", "00:04:16", "+0330", -210]
	]),

	"1977" : helpers.makeTestYear("Iran", [
		["1977-03-21T19:29:59+00:00", "22:59:59", "+0330", -210],
		["1977-03-21T19:30:00+00:00", "00:00:00", "+0430", -270],
		["1977-10-20T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1977-10-20T19:30:00+00:00", "23:30:00", "+04", -240]
	]),

	"1978" : helpers.makeTestYear("Iran", [
		["1978-03-24T19:59:59+00:00", "23:59:59", "+04", -240],
		["1978-03-24T20:00:00+00:00", "01:00:00", "+05", -300],
		["1978-08-04T19:59:59+00:00", "00:59:59", "+05", -300],
		["1978-08-04T20:00:00+00:00", "00:00:00", "+04", -240],
		["1978-12-31T19:59:59+00:00", "23:59:59", "+04", -240],
		["1978-12-31T20:00:00+00:00", "23:30:00", "+0330", -210]
	]),

	"1979" : helpers.makeTestYear("Iran", [
		["1979-05-26T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1979-05-26T20:30:00+00:00", "01:00:00", "+0430", -270],
		["1979-09-18T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1979-09-18T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"1980" : helpers.makeTestYear("Iran", [
		["1980-03-20T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1980-03-20T20:30:00+00:00", "01:00:00", "+0430", -270],
		["1980-09-22T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1980-09-22T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"1991" : helpers.makeTestYear("Iran", [
		["1991-05-02T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1991-05-02T20:30:00+00:00", "01:00:00", "+0430", -270],
		["1991-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1991-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"1992" : helpers.makeTestYear("Iran", [
		["1992-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1992-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["1992-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1992-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"1993" : helpers.makeTestYear("Iran", [
		["1993-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1993-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["1993-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1993-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"1994" : helpers.makeTestYear("Iran", [
		["1994-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1994-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["1994-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1994-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"1995" : helpers.makeTestYear("Iran", [
		["1995-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1995-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["1995-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1995-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"1996" : helpers.makeTestYear("Iran", [
		["1996-03-20T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1996-03-20T20:30:00+00:00", "01:00:00", "+0430", -270],
		["1996-09-20T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1996-09-20T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"1997" : helpers.makeTestYear("Iran", [
		["1997-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1997-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["1997-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1997-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"1998" : helpers.makeTestYear("Iran", [
		["1998-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1998-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["1998-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1998-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"1999" : helpers.makeTestYear("Iran", [
		["1999-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["1999-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["1999-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["1999-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2000" : helpers.makeTestYear("Iran", [
		["2000-03-20T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2000-03-20T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2000-09-20T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2000-09-20T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2001" : helpers.makeTestYear("Iran", [
		["2001-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2001-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2001-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2001-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2002" : helpers.makeTestYear("Iran", [
		["2002-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2002-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2002-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2002-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2003" : helpers.makeTestYear("Iran", [
		["2003-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2003-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2003-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2003-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2004" : helpers.makeTestYear("Iran", [
		["2004-03-20T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2004-03-20T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2004-09-20T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2004-09-20T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2005" : helpers.makeTestYear("Iran", [
		["2005-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2005-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2005-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2005-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2008" : helpers.makeTestYear("Iran", [
		["2008-03-20T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2008-03-20T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2008-09-20T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2008-09-20T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2009" : helpers.makeTestYear("Iran", [
		["2009-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2009-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2009-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2009-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2010" : helpers.makeTestYear("Iran", [
		["2010-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2010-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2010-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2010-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2011" : helpers.makeTestYear("Iran", [
		["2011-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2011-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2011-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2011-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2012" : helpers.makeTestYear("Iran", [
		["2012-03-20T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2012-03-20T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2012-09-20T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2012-09-20T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2013" : helpers.makeTestYear("Iran", [
		["2013-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2013-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2013-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2013-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2014" : helpers.makeTestYear("Iran", [
		["2014-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2014-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2014-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2014-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2015" : helpers.makeTestYear("Iran", [
		["2015-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2015-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2015-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2015-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2016" : helpers.makeTestYear("Iran", [
		["2016-03-20T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2016-03-20T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2016-09-20T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2016-09-20T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2017" : helpers.makeTestYear("Iran", [
		["2017-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2017-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2017-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2017-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2018" : helpers.makeTestYear("Iran", [
		["2018-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2018-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2018-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2018-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2019" : helpers.makeTestYear("Iran", [
		["2019-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2019-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2019-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2019-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2020" : helpers.makeTestYear("Iran", [
		["2020-03-20T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2020-03-20T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2020-09-20T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2020-09-20T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2021" : helpers.makeTestYear("Iran", [
		["2021-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2021-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2021-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2021-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	]),

	"2022" : helpers.makeTestYear("Iran", [
		["2022-03-21T20:29:59+00:00", "23:59:59", "+0330", -210],
		["2022-03-21T20:30:00+00:00", "01:00:00", "+0430", -270],
		["2022-09-21T19:29:59+00:00", "23:59:59", "+0430", -270],
		["2022-09-21T19:30:00+00:00", "23:00:00", "+0330", -210]
	])
};