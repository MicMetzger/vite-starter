import { showSpeech } from "prendy";
import { makeInteractButtonRules, makeOnInteractAtTrigger, makeOnInteractToTalk } from "prendy";

export const interactButtonRules = makeInteractButtonRules({
  onInteractAtTrigger: makeOnInteractAtTrigger({
    stairy: {
      async door_to_basement() {
        // when the player touches the "door_to_basement" trigger
        await showSpeech("I just came from there 🤔");
      },
    },
  }),
  onInteractAtTalk: makeOnInteractToTalk({
    async walker() {},
  }),
});
