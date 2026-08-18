# DSA

## Interviewers are evaluating 4 things

1. Clarity of thinking
2. Communication
3. Problem-solving structure
4. Tradeoff awareness (senior-level)

## Things to remember for DSA interview

In senior interviews, the interviewer acts as your colleague, not your examiner. Treat the interview like a production bug-fixing session.

### Phase 1

In here, we define boundaries, we discuss about the data given in the problem statement and clarify our doubts

1. Dont start coding immediately
2. Restate the problem:
   - "So we need to find X given Y, constraints are Z…"
3. Ask smart questions:
   - **Ask about Data Constraints:** What is the input size? Can it fit in memory?
   - **Ask about Data Types:** Are there negative numbers? Floating points? Empty inputs? Null values?
   - **Ask more like:** “Are inputs sorted?”, “Can there be duplicates?”

### Phase 2 (Think out loud)

In this phase we start with a quick solution (brute force any bad solution) and them optimize it systematically. But remember, we need to talk out loud about everything that goes into our mind and no space for silence

1. **State the naive approach:** "The simplest way is a nested loop. That takes \(O(N^2)\) time."
2. **Explain why it fails:** "For a 100,000 element array, \(O(N^2)\) will cause a timeout in production."
3. **Propose optimizations:** "To beat \(O(N^2)\), we need \(O(N \log N)\) using sorting, or \(O(N)\) using a Hash Map/Set."
4. Then proceed with the optimised approach coding

### Phase 3

In this phase we will dry run the code and find any possible bugs by ourselves

1. Say out loud "Let me test with an example"
2. **Trace with small inputs:** Walk through the code line-by-line using a sample input.
3. **Remember these:** Use meaningful variable names, Handle edge cases, Dont rush
