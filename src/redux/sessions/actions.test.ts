import * as actions from "./actions"
// @ponicode
describe("actions.addSession", () => {
    test("0", () => {
        let inst: any = new Date("01-01-2030")
        let callFunction: any = () => {
            actions.addSession({ date: inst, pre_feelings: "v4.0.0-rc.4", pre_score: 0.0, post_feelings: "4.0.0-beta1\t", post_score: 1.0, id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let inst: any = new Date("32-01-2020")
        let callFunction: any = () => {
            actions.addSession({ date: inst, pre_feelings: "v4.0.0-rc.4", pre_score: -0.5, post_feelings: "v1.2.4", post_score: 0.5, id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let inst: any = new Date("01-13-2020")
        let callFunction: any = () => {
            actions.addSession({ date: inst, pre_feelings: "v4.0.0-rc.4", pre_score: 0.0, post_feelings: "v4.0.0-rc.4", post_score: 0.0, id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let inst: any = new Date("01-13-2020")
        let callFunction: any = () => {
            actions.addSession({ date: inst, pre_feelings: "1.0.0", pre_score: 1.0, post_feelings: "4.0.0-beta1\t", post_score: -1.0, id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let inst: any = new Date("01-13-2020")
        let callFunction: any = () => {
            actions.addSession({ date: inst, pre_feelings: "1.0.0", pre_score: 0.5, post_feelings: "v4.0.0-rc.4", post_score: -29.45, id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let inst: any = new Date("")
        let callFunction: any = () => {
            actions.addSession({ date: inst, pre_feelings: "", pre_score: Infinity, post_feelings: "", post_score: Infinity, id: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.addSessions", () => {
    test("0", () => {
        let inst: any = new Date("01-01-2020")
        let inst2: any = new Date("01-13-2020")
        let inst3: any = new Date("01-01-2020")
        let param1: any = [{ date: inst, pre_feelings: "4.0.0-beta1\t", pre_score: -1.0, post_feelings: "^5.0.0", post_score: 0.5, id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { date: inst2, pre_feelings: "v4.0.0-rc.4", pre_score: -29.45, post_feelings: "v1.2.4", post_score: 0.5, id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { date: inst3, pre_feelings: "4.0.0-beta1\t", pre_score: 0.0, post_feelings: "1.0.0", post_score: -1.0, id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }]
        let callFunction: any = () => {
            actions.addSessions(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let inst: any = new Date("01-01-2030")
        let inst2: any = new Date("01-01-2030")
        let inst3: any = new Date("32-01-2020")
        let inst4: any = new Date("01-13-2020")
        let inst5: any = new Date("01-13-2020")
        let param1: any = [{ date: inst, pre_feelings: "v1.2.4", pre_score: 0.0, post_feelings: "v1.2.4", post_score: -29.45, id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { date: inst2, pre_feelings: "^5.0.0", pre_score: -0.5, post_feelings: "v4.0.0-rc.4", post_score: 10.0, id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { date: inst3, pre_feelings: "v1.2.4", pre_score: 0.5, post_feelings: "1.0.0", post_score: 0.0, id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { date: inst4, pre_feelings: "^5.0.0", pre_score: -1.0, post_feelings: "4.0.0-beta1\t", post_score: -29.45, id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { date: inst5, pre_feelings: "^5.0.0", pre_score: 10.23, post_feelings: "^5.0.0", post_score: 0.0, id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }]
        let callFunction: any = () => {
            actions.addSessions(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let inst: any = new Date("01-13-2020")
        let param1: any = [{ date: inst, pre_feelings: "^5.0.0", pre_score: 0.0, post_feelings: "v4.0.0-rc.4", post_score: 1.0, id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }]
        let callFunction: any = () => {
            actions.addSessions(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let inst: any = new Date("01-01-2020")
        let inst2: any = new Date("01-13-2020")
        let inst3: any = new Date("01-13-2020")
        let param1: any = [{ date: inst, pre_feelings: "4.0.0-beta1\t", pre_score: 10.0, post_feelings: "^5.0.0", post_score: 10.23, id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { date: inst2, pre_feelings: "v4.0.0-rc.4", pre_score: -29.45, post_feelings: "v1.2.4", post_score: -1.0, id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { date: inst3, pre_feelings: "^5.0.0", pre_score: 0.0, post_feelings: "4.0.0-beta1\t", post_score: 0.0, id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }]
        let callFunction: any = () => {
            actions.addSessions(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let inst: any = new Date("01-01-2020")
        let inst2: any = new Date("32-01-2020")
        let param1: any = [{ date: inst, pre_feelings: "1.0.0", pre_score: -1.0, post_feelings: "^5.0.0", post_score: -29.45, id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { date: inst2, pre_feelings: "v1.2.4", pre_score: -0.5, post_feelings: "^5.0.0", post_score: 10.23, id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }]
        let callFunction: any = () => {
            actions.addSessions(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.addSessions([])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.removeSession", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.removeSession("https://api.telegram.org/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.removeSession("www.google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.removeSession("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.removeSession("https://api.telegram.org/bot")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.removeSession("http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.removeSession("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.fetchSessions", () => {
    test("0", () => {
        let callFunction: any = () => {
            actions.fetchSessions("http://base.com", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            actions.fetchSessions("https://accounts.google.com/o/oauth2/revoke?token=%s", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            actions.fetchSessions("https://twitter.com/path?abc", 32)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            actions.fetchSessions("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "Manager")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            actions.fetchSessions("http://base.com", "Producer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            actions.fetchSessions("", Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
