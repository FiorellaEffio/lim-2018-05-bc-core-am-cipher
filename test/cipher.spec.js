describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXY"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar "% %" para "% %" con offest 33', () => {
      assert.equal(cipher.encode(33,"% %"), "% %");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offest 33', () => {
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "% %" para "% %" con offest 33', () => {
      assert.equal(cipher.decode(33,"% %"), "% %");
    });
  });
  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    describe('cipher.createCipherWithOffset(33)', () => {
      const offset = 33;
      it('debería ser un objeto', () => {
        assert.equal(typeof cipher.createCipherWithOffset(offset), 'object');
      });

      it('debería ser una función', () => {
        assert.equal(typeof cipher.createCipherWithOffset(offset).encode, 'function');
      });

      it('debería ser una función', () => {
        assert.equal(typeof cipher.createCipherWithOffset(offset).decode, 'function');
      });
      it('debería ser recursivo en decode', () => {
        assert.equal(cipher.createCipherWithOffset(33).decode("abc"), cipher.decode(33, "abc"));
      });
      it('debería ser recursivo en encode', () => {
        assert.equal(cipher.createCipherWithOffset(33).encode("abc"), cipher.encode(33, "abc"));
      });
    });

  });
});
